﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using LINEAE.TTS;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LINEAE
{
    [Route("api/[controller]")]
    public class TTSController : Controller
    {
        

        // GET api/<controller>/5
        [HttpGet("{text}")]
        async public Task<string> Get(string text)
        {
            //byte[] byteText = Encoding.UTF8.GetBytes(text);
            //var saveFileName = "cache/" + Convert.ToBase64String(byteText);

            var decodedText = HttpUtility.UrlDecode(text);
            var ret = await SaveTTSAsync(decodedText);
            return HttpUtility.UrlEncode(ret);
        }

        
        
        // POST api/<controller>
        [HttpPost]
        public Task<string> Post([FromBody]string value)
        {
            return SaveTTSAsync(value);
        }

        async private Task<string> SaveTTSAsync(string text) {

            var saveFileName = getEncodedSaveFileName(text);
            var filePath = getWebPath(saveFileName);

            if (!new FileInfo(filePath).Exists)
            {
                //auth task
                var authTokenTask = Task.Run(() =>
                {
                    var auth = new Authentication(Constants.IssueTokenUrl, Constants.SubscriptionKey);
                    return auth.GetAccessToken();
                });

                //save task
                await authTokenTask.ContinueWith((t =>
                {

                    var authToken = t.Result;
                    var cortana = new Synthesize(saveFileName);
                    cortana.OnAudioAvailable += Cortana_OnAudioAvailable;
                    cortana.Speak(CancellationToken.None, new Synthesize.InputOptions()
                    {
                        RequestUri = new Uri(Constants.TTSUrl),
                        // Text to be spoken.
                        Text = text,
                        VoiceType = Gender.Female,

                        // Refer to the documentation for complete list of supported locales.
                        // Please note locale must be matched with voice locales. 
                        Locale = "en-US",
                        VoiceName = "en-US-Jessa24kRUS",
                        OutputFormat = AudioOutputFormat.Riff24Khz16BitMonoPcm,

                        // For onpremise container, auth token is optional 
                        AuthorizationToken = "Bearer " + authToken,
                    }).Wait();

                    cortana.OnAudioAvailable -= Cortana_OnAudioAvailable;

                }));
            }


            return saveFileName;
        }

        private string getEncodedSaveFileName(string text) {
            byte[] byteText = Encoding.UTF8.GetBytes(text);
            return Convert.ToBase64String(byteText) + ".wav";
        }

        private string getWebPath(string fileName)
        {
            return System.IO.Path.Combine("./wwwroot/cache/", fileName);
        }

        private void Cortana_OnAudioAvailable(object sender, GenericEventArgs<Stream> e)
        {
            var cortana = sender as Synthesize;
            var filePath = getWebPath(cortana.SaveFileName);
            using (var outputStream = System.IO.File.Open(filePath, FileMode.CreateNew))
            {
                e.EventData.CopyTo(outputStream);
            }
            e.EventData.Dispose();
        }

    }
}
