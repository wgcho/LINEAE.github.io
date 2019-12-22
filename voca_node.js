var req = require("sync-request");
const cheerio = require("cheerio");
const fs = require("fs");
const log = console.log;

var voca_file_name = "voca_data_1000"
var voca_data = fs.readFileSync(voca_file_name + ".js", "utf8")
var splits = voca_data.split("\n")
var sliced = splits.slice(2, splits.length)
var joined = sliced.join("\n")
var vocas = JSON.parse(joined)

// test
var from = 400
var until = from + 100
vocas = vocas.slice(from, until)

function appendPronounce(voca) {
    try {
        var url = "https://dic.daum.net/search.do?q=" + voca[0]
        log("==> " + voca[0] + " : " + url)

        const $ = cheerio.load(req("GET", url).getBody("utf8"));
        const pronounce = $("span.txt_pronounce").first().text()
        voca[2] = pronounce

        // log($("span.desc_listen").children())
        log($("span.txt_pronounce").first().text())

        const voice = $("a.btn_voice.btn_listen")[0].attribs.href
        voca[3] = voice

        log(voca)
    } catch (e) {
        log(e)
    }
}

for(var i = 0; i < vocas.length; i++) {
    var voca = vocas[i]
    appendPronounce(voca)
}

log(vocas)
fs.writeFileSync(voca_file_name + "+" + from + "_" + until + ".js", JSON.stringify(vocas).replace(/\],\[/g, "],\n[").replace("[[", "[").replace("]]", "],"))

