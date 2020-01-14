// 원형, 과거, 과거완료, 현재진행, 한국어, 단수형
var irregularVerbsData = [
["drive", "drove", "driven", "driving", "운전하다", ""],
["ride", "rode", "ridden", "riding", "(탈것에)타다", ""],
["write", "wrote", "written", "writing", "(글씨를)쓰다", ""],
["break", "broke", "broken", "breaking", "부수다", ""],
["choose", "chose", "chosen", "choosing", "선택하다", ""],
["forget", "forgot", "forgotten", "forgetting", "잊다", ""],
["freeze", "froze", "frozen", "freezing", "얼다", ""],
["speak", "spoke", "spoken", "speaking", "말하다,연설하다", ""],
["steal", "stole", "stolen", "stealing", "훔치다", ""],
["begin", "began", "begun", "beginning", "시작하다", ""],
["drink", "drank", "drunk", "drinking", "마시다", ""],
["run", "ran", "run", "running", "달리다", ""],
["shrink", "shrank", "shrunk", "shrinking", "줄어들다", ""],
["sing", "sang", "sung", "singing", "노래하다", ""],
["spring", "sprang", "sprung", "springing", "튀어오르다", ""],
["swim", "swam", "swum", "swimming", "수영하다", ""],
["mistake", "mistook", "mistaken", "mistaking", "실수하다", ""],
["shake", "shook", "shaken", "shaking", "혼들다", ""],
["take", "took", "taken", "taking", "잡다", ""],
["blow", "blew", "blown", "blowing", "불다", ""],
["fly", "flew", "flown", "flying", "날다", ""],
["grow", "grew", "grown", "growing", "자라다", ""],
["know", "knew", "known", "knowing", "알다", ""],
["throw", "threw", "thrown", "throwing", "던지다", ""],
["withdraw", "withdrew", "withdrawn", "withdrawing", "(돈을)인출하다,철회하다", ""],
["swear", "swore", "sworn", "swearing", "맹세하다", "swear"],
["tear", "tore", "torn", "tearing", "찢다", ""],
["wear", "wore", "worn", "wearing", "입다", ""],
["show", "showed", "shown", "showing", "보여주다", ""],
["be(am/is,are)", "was/were", "been", "being", "있다/이다", "is"],
["beat", "beat", "beaten", "beating", "때리다", ""],
["become", "became", "become", "becoming", "되다", ""],
["bite", "bit", "bitten", "biting", "물다", ""],
["come", "came", "come", "coming", "오다", ""],
["do", "did", "done", "doing", "하다", ""],
["eat", "ate", "eaten", "eating", "먹다", ""],
["fall", "fell", "fallen", "falling", "떨어지다", ""],
["forbid", "forbade", "forbidden", "forbidding", "금지하다", ""],
["forgive", "forgave", "forgiven", "forgiving", "용서하다", ""],
["give", "gave", "given", "giving", "주다", ""],
["go", "went", "gone", "going", "가다", ""],
["hide", "hid", "hidden", "hiding", "숨기다", ""],
["lie", "lay", "lain", "lying", "눕다", ""],
["see", "saw", "seen", "seeing", "보다", ""],
["bleed", "bled", "bled", "bleeding", "피를흘리다", ""],
["feed", "fed", "fed", "feeding", "먹이다", ""],
["lead", "led", "led", "leading", "이끌다", ""],
["meet", "met", "met", "meeting", "만나다", ""],
["read", "read", "read", "reading", "읽다", ""],
["shoot", "shot", "shot", "shooting", "쏘다,발사하다", ""],
["sleep", "slept", "slept", "sleeping", "자다", ""],
["speed", "sped", "sped", "speeding", "속도를내다", ""],
["hear", "heard", "heard", "hearing", "듣다", ""],
["dig", "dug", "dug", "digging", "파다", ""],
["hang", "hung", "hung", "hanging", "매달다", ""],
["stick", "stuck", "stuck", "sticking", "찌르다,붙이다", ""],
["strike", "struck", "struck", "striking", "치다,때리다", ""],
["awake", "awoke", "awoken", "awaking", "(잠에서)깨우다", ""],
["get", "got", "gotten(got)", "getting", "얻다,되다", ""],
["shine", "shone", "shone", "shining", "빛나다", ""],
["win", "won", "won", "wining", "이기다,얻다", ""],
["bend", "bent", "bent", "bending", "구부리다", ""],
["build", "built", "built", "building", "세우다.짓다", ""],
["lend", "lent", "lent", "lending", "빌려주다", ""],
["lose", "lost", "lost", "losing", "잃다", ""],
["send", "sent", "sent", "sending", "보내다", ""],
["spend", "spent", "spent", "spending", "(시간이나 돈을)사용하다", ""],
["deal", "dealt", "dealt", "dealing", "다루다", ""],
["mean", "meant", "meant", "meaning", "의미하다", ""],
["bring", "brought", "brought", "bringing", "가져오다", ""],
["buy", "bought", "bought", "buying", "사다", ""],
["catch", "caught", "caught", "catching", "잡다", ""],
["fight", "fought", "fought", "fighting", "싸우다", ""],
["seek", "sought", "sought", "seeking", "찾다,추구하다", ""],
["teach", "taught", "taught", "teaching", "가르치다", ""],
["think", "thought", "thought", "thinking", "생각하다", ""],
["find", "found", "found", "finding", "찾다.발견하다", ""],
["pay", "paid", "paid", "paying", "지불하다", ""],
["say", "said", "said", "saying", "말하다", ""],
["stand", "stood", "stood", "standing", "서다", ""],
["understand", "understood", "understood", "understanding", "이해하다", ""],
["feel", "felt", "felt", "feeling", "느끼다", ""],
["hold", "held", "held", "holding", "잡다,쥐다", ""],
["keep", "kept", "kept", "keeping", "유지하다", ""],
["leave", "left", "left", "leaving", "떠나다", ""],
["sell", "sold", "sold", "selling", "팔다", ""],
["tell", "told", "told", "telling", "말하다", ""],
["have", "had", "had", "having", "갖다,가지다", "has"],
["light", "lit", "lit", "lighting", "(불을)켜다,밝히다", ""],
["make", "made", "made", "making", "만들다", ""],
["sit", "sat", "sat", "sitting", "앉다", ""],
["slide", "slid", "slid", "sliding", "미끄러지다", ""],
["burst", "burst", "burst", "bursting", "터뜨리다", ""],
["cost", "cost", "cost", "costing", "(비용이)들다", ""],
["cut", "cut", "cut", "cutting", "자르다", ""],
["hit", "hit", "hit", "hitting", "치다", "hit"],
["hurt", "hurt", "hurt", "hurting", "다치게 하다", ""],
["put", "put", "put", "putting", "두다,놓다", ""],
["set", "set", "set", "setting", "놓다,마련하다", ""],
["shut", "shut", "shut", "shutting", "닫다,잠그다", ""],
["spread", "spread", "spread", "spreading", "퍼다,떨치다", ""],
["bear", "bore", "born(e)", "bearing", "출산하다", ""],
]

var imageArticlesData = [
["A father and his child go down a water slide."],
["A man puts oil on a bicycle chain."],
["A woman is in a raincoat and she rides her bike."],
["A man writes his name on a waiting list for the blood donation at the RedCross office in Tokyo."],
["A rainbow appears over a lighthouse."],
["A volunteer collects money from a woman in the market."],
["A man takes a break on his tricycle outside a store."],
["The sun shines behind the price board at a gas station."],
["A bullfighter stands behind the wall with the shadow of a bull."],
["A bullfighter leans and touches the bull with long spears in the back."],
["A bullfighter falls to the ground after the bull's attack on the horse."],
["A fighting bull goes through the legs of a bullfighter."],
["Several men run and look back over their shoulders at bulls."],
["A bull hits a man and (it) sends him to the fence."],
["A man lies on the ground when bulls pass him."],
["A bullfighter is knocked down by a bull."],
["A man gives a thumbs up to people and he is carried on a stretcher by the rescue men to the hospital."],
["A nurse sits outside a room at a houspital."],
["A man pushes his cart to the market when he walks past a large shopping bag."],
["A man raises belts (up) into the air when he sells his goods (to the customers) at the market."],
["Girls buy items from a vendor in the market."],
["A woman puts rings around her wrist."],
["A shopkeeper browses a dictionary and she waits for customers."],
["A campaign girl pours water on the movie camera."],
["He looks through binoculars."],
["A welcoming banner hangs on a bridge over the cars in the street."],
["Fireworks explode from the beach into the sky as a lot of people watch them."],
["He is answering questions from reporters after a press conference."],
["A singer puts his handprints into a cement next the frame."],
["A man looks into a car."],
["People use butterfly nets for apples at the Cheonggyecheon, a restored stream."],
["A man jumps into the arms of the crowd."],
["Sunflowers must be dried on a field."],
["Visitors sit on the steps of the museum and rest in the shade after sightseeing."],
["A man has fallen asleep in his chair outside the office."],
["A woman protects herself with her handbag from the sun at the bus station."],
["A young woman can cool herself in the water of a fountain."],
["Local people sit under an umbrella during a heavy rainfall."],
["Students hold umbrellas in the rain and they run across the road."],
["They struggle to hold their umbrella in the strong wind."],
["A tower is high above the town."],
["A car makes its way through flood water after continuous heavy rainfall."],
["An old woman sits in the chair with floodwater in the house after the typhoon."],
["A father carries his daughter on his back in a flooded area amid a tropical storm."],
["You can take a view from the 63 Building in Yeouido and it shows a clean blue sky over downtown Seoul after typhoon."],
["An animal is licking snow off its nose an the zoo in Hamburg, Germany."],
["Foreign expats and Koreans make kimchi with 2,000 heads of cabbages at Namsangol Hanok Village in Seoul. The Kimchi will be delivered to 500 needy households."],
["People put masks on their mouths for protection."],
["She stands amid yellow leaves."],
["A surfer tries to ride some of the large waves."],
["Two men lower a young girl down into the water for the religious service in the river."],
["School students are taking their temperatures together in class."],
["People queue under the rain outside the Apple store in Beijing before the ipad's sale in China."],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
[""],
]
//[""],

var adjectivesData = [
["외모", "beautiful","아름다운"],
["외모", "pretty","예쁜"],
["외모", "handsome","잘생긴"],
["외모", "lovely","사랑스러운"],
["외모", "sweet","사랑스러운"],
["외모", "cute","귀여운"],
["외모", "attractive","매력적인"],
["외모", "charming","매력적인"],
["외모", "great","멋진"],
["외모", "cool","멋진"],
["외모", "wonderful","멋진"],
["외모", "nice","멋진"],
["외모", "ordinary","평범한"],
["외모","ugly","못생긴"],
["외모","tall","키가 큰"],
["외모","average","평균의"],
["외모","short","키가 작은"],
["외모","heavy","무거운"],
["외모","light","가벼운"],
["외모","big","큰"],
["외모","small","작은"],
["외모","slim","호리호리한"],
["외모","slender","날씬한"],
["외모","thin","마른"],
["외모","fat","뚱뚱한"],
["외모","wonderful","멋진, 훌륭한"],
["외모","great","대단한"],
["외모","awesome","최고인"],
["외모","humble","초라한"],
["외모","shabby","흐름한"],
["외모","young","젊은, 어린"],
["외모","old","나이 든, 늙은"],
["외모","well","좋은(건강)"],
["외모","healthy","건강한"],
["외모","strong","강한"],
["외모","powerful","힘이센"],
["외모","weak","약한"],
["외모","sick","아픈"],
["외모","ill","병에 걸린"],
["외모","hurt","다친"],
["외모","injured","부상 입은"],
["외모","good","좋은(컨디션)"],
["외모","fine","좋은(컨디션)"],
["외모","bad","나쁜(컨디션)"],
["외모","tired","피곤한"],
["외모","dizzy","어지러운, 현기증이 나는"],
["외모","high","높은(체온)"],
["외모","low","낮은(체온)"],
["외모","feverish","열이 나는"],
["외모","drunk","술 취한"],
["외모","sober","술이 깬, 취하지 않은"],
["외모","awake","깨어 있는"],
["외모","sleepy","졸린"],
["외모","asleep","잠들어 있는"],
["외모","full","배부른"],
["외모","hungry","배고픈"],
["외모","thirsty","목마른"],
["외모","deaf","귀 먹은"],
["외모","blind","눈이 먼"],
["외모","dumb","벙어리"],
["외모","paralyzed","마비된"],
["외모","conscious","의식 있는"],
["외모","unconscious","의식 없는"],
["외모","alive","살아 있는"],
["외모","dead","죽은, 활기가 없는"],
["성격","good","착한, 친절한"],
["성격","bad","나쁜"],
["성격","mean","비열한, 심술궃은"],
["성격","cruel","잔혹한, 무자비한"],
["성격","evil","악한"],
["성격","kind","친절한"],
["성격","nice","친절한"],
["성격","friendly","다정한, 친근한"],
["성격","polite","정중한, 예의바른"],
["성격","generous","관대한"],
["성격","rude","무례한"],
["성격","impolite","예의 없는"],
["성격","mild","온순한"],
["성격","gentle","온화한, 인자한"],
["성격","tender","부드러운"],
["성격","warm","따뜻한"],
["성격","violent","난폭한, 격렬한"],
["성격","rough","거친"],
["성격","tough","거친"],
["성격","honest","정직한"],
["성격","right","올바른"],
["성격","just","의로운"],
["성격","straight","솔직한"],
["성격","frank","솔직한"],
["성격","outspoken","기탄없는"],
["성격","dishonest","부정직한"],
["성격","doubtful","의심많은"],
["성격","suspicious","수상한"],
["성격","humble","겸손한"],
["성격","modest","겸손한"],
["성격","arrogant","거만한"],
["성격","ordinary","평범한"],
["성격","normal","보통의, 정상의"],
["성격","strange","이상한"],
["성격","odd","별난"],
["성격","unique","독특한"],
["성격","special","특별한"],
["성격","sane","제정신인"],
["성격","insane","제정신이 아닌"],
["성격","thoughtful","생각이 깊은"],
["성격","thoughtless","경솔한"],
["성격","careful","주의깊은, 신중한, 조심스러운"],
["성격","careless","부주의한"],
["성격","serious","진지한, 심각한"],
["성격","sensitive","민감한, 섬세한"],
["성격","risky","무모한"],
["성격","quiet","조용한"],
["성격","silent","조용한"],
["성격","talkative","수다스러운"],
["성격","clever","똑똑한"],
["성격","smart","영리한"],
["성격","intelligent","지적인"],
["성격","wise","지혜로운, 현명한"],
["성격","rational","이성적인, 합리적인"],
["성격","ridiculous","말도 안되는, 터무니 없는"],
["성격","stupid","어리석은"],
["성격","silly","어리석은"],
["성격","foolish","바보같은"],
["성격","strong","강한, 튼튼한"],
["성격","powerful","강력한"],
["성격","stubborn","완고한, 고집이 센"],
["성격","weak","약한"],
["성격","frail","허약한"],
["성격","severe","엄한"],
["성격","strict","엄격한"],
["성격","harsh","가혹한"],
["성격","gentle","온화한, 인자한"],
["성격","positive","긍정적인"],
["성격","optimistic","낙관적인"],
["성격","negative","부정적인"],
["성격","pessimistic","비관적인"],
["성격","cynical","냉소적인"],
["성격","responsible","책임감 있는"],
["성격","irresponsible","무책임한"],
["성격","selfish","이기적인, 자기 중심적인"],
["성격","greedy","탐욕스러운"],
["성격","unselfish","이타적인"],
["성격","considerable","배려심이 깊은"],
["성격","active","활동적인, 능동적인"],
["성격","aggressive","적극적인, 공격적인"],
["성격","enthusiastic","열광적인"],
["성격","passive","수동적인"],
["성격","timid","소심한, 내성적인"],
["성격","extroverted","외향적인"],
["성격","introverted","내성적인"],
["성격","brave","용감한"],
["성격","shy","수줍은"],
["성격","hard-working","부지런한, 근면한"],
["성격","deligent","부지런한, 근면한"],
["성격","lazy","게으른"],
["성격","conservative","보수적인"],
["성격","progressive","진보적인"],
["성격","open-minded","마음이 넓은"],
["성격","free-hearted","통이 큰"],
["성격","big-hearted","대범한"],
["성격","large-hearted","대범한"],
["성격","close-minded","속좁은"],
["성격","noble","고상한, 고귀한"],
["성격","elegant","우아한"],
["성격","educated","교양 있는, 교육 받은"],
["성격","shallow","천박한"],
["성격","curious","호기심 강한"],
["성격","indifferent","무관심한"],
["성격","mysterious","신비한"],
["심경","comfortable","편안한"],
["심경","easy","수월한"],
["심경","cozy","아늑한"],
["심경","relieved","안도된"],
["심경","uncomfortable","불편한"],
["심경","uneasy","불편한"],
["심경","weary","지친"],
["심경","tired","피곤한"],
["심경","weary","실증나는"],
["심경","disgusted","역겨운"],
["심경","calm","침착한"],
["심경","confused","혼란스러운"],
["심경","nervous","초조한, 긴장되는"],
["심경","worried","염려되는"],
["심경","afraid","두려운, 걱정되는"],
["심경","concerned","우려하는, 신경쓰이는"],
["심경","complicated","복잡한"],
["심경","surprised","놀란"],
["심경","amazed","놀란"],
["심경","embarrassed","당황한"],
["심경","frightened","깜짝 놀란, 겁을 먹은"],
["심경","shocked","충격적인"],
["심경","scared","무서운"],
["심경","fond","좋아하는"],
["심경","willing","기꺼이 ~하는"],
["심경","anxious","갈망하는"],
["심경","keen","몹시 하고 싶어하는"],
["심경","excited","흥분한"],
["심경","crazy","미친, 열광적인"],
["심경","reluctant","꺼리는, 내키지 않은"],
["심경","unwilling","하고 싶지 않은"],
["심경","glad","기쁜, 즐거운"],
["심경","gloomy","우울한"],
["심경","melancholy","우울한"],
["심경","lonely","외로운"],
["심경","sad","슬픈"],
["심경","upset","기분 나쁜, 언짢은"],
["심경","angry","화난"],
["심경","happy","행복한"],
["심경","satisfied","만족한"],
["심경","unhappy","불행한, 불만스러운"],
["심경","dissatisfied","불만족한"],
["심경","disappointed","실망한"],
["심경","frustrated","낙담한, 좌절한"],
["심경","miserable","비참한"],
["심경","pitiful","비참한"],
["심경","proud","자랑스러운"],
["심경","ashamed","수치스러운, 부끄러운"],
["심경","thankful","감사하는, 고마운"],
["심경","grateful","감사하는, 고마운"],
["심경","sorry","미안한, 유감인"],
["심경","regretful","유김인"],
["심경","interested","관심있는"],
["심경","bored","지루한"],
["심경","patient","끈기있는"],
["심경","impatient","끈기없는, 조급한"],
["심경","confident","자신있는, 확신하는"],
["심경","unsure","자신없는"],
["심경","sure","확실한"],
["심경","certain","확실한"],
["심경","unsure","불확실한"],
["심경","uncertain","불확실한"],
["능력","competent","유능한, 적격인"],
["능력","able","할 수 있는"],
["능력","capable","능력있는"],
["능력","incapable","무능한"],
["능력","powerless","할 수 없는"],
["능력","extraordinary","보기 드문, 비범한; 대단한"],
["능력","excellent","비범한"],
["능력","superior","우수한"],
["능력","inferior","열등한"],
["능력","ready","준비된"],
["능력","unready","준비 안된"],
["능력","perfect","완벽한"],
["능력","complete","완전한"],
["능력","imperfect","불완전한"],
["능력","short","부족한, 불충분한"],
["능력","insufficient","부족한, 불충분한"],
["능력","skillful","능숙한"],
["능력","expert","숙련된"],
["능력","awkward","서툰"],
["능력","poor","약한"],
["능력","necessary","필요한"],
["능력","essential","절대적으로 필요한, 필수적인"],
["능력","unnecessary","필요하지 않은"],
["능력","needless","쓸데없는"],
["능력","rich","부자인"],
["능력","wealthy","부유한"],
["능력","poor","가난한"],
["능력","hired","고용된"],
["능력","employed","고용된"],
["능력","fired","해고된"],
["능력","unemployed","실직한"],
["능력","jobless","일이 없는"],
["날씨","fine","좋은"],
["날씨","clear","맑게 갠, 청명한"],
["날씨","sunny","화창한, 쨍쨍한"],
["날씨","warm","포근한, 따뜻한"],
["날씨","foggy","안개 낀"],
["날씨","windy","바람 부는"],
["날씨","changeable","변덕스러운"],
["날씨","gloomy","음산한, 우중충한"],
["날씨","cloudy","흐린, 구름 낀"],
["날씨","rainy","비 오는"],
["날씨","stormy","비바람 부는, 폭풍우의"],
["날씨","chilly","쌀쌀한"],
["날씨","cold","추운"],
["날씨","freezing","몹시 추운"],
["날씨","snowy","눈 오는"],
["날씨","hot","더운"],
["날씨","wet","젖은, 축축한"],
["날씨","moist","습한"],
["날씨","humid","습한"],
["날씨","dry","건조한"],
["날씨","muggy","후덥지근한"],
["날씨","scorching","타는 듯한"],
["날씨","sticky","무더운, 끈적거리는"],
["생활","born","태어난, 타고난"],
["생활","single","독신의"],
["생활","engaged","약혼한"],
["생활","married","결혼한"],
["생활","divorced","이혼한"],
["생활","busy","바쁜"],
["생활","relaxed","여유로운"],
["생활","safe","안전한"],
["생활","dangerous","위험한"],
["생활","familiar","익숙한"],
["생활","used","익숙한"],
["생활","strange","이상한"],
["생활","early","일찍"],
["생활","late","늦은, 지각한"],
["생활","famous","유명한"],
["생활","popular","인기 있는"],
["생활","noted","저명한"],
["생활","celebrated","저명한"],
["생활","distinguished","저명한"],
["생활","unpopular","인기가 없는"],
["생활","easy","쉬운"],
["생활","difficult","어려운"],
["생활","quiet","조용한"],
["생활","silent","조용한"],
["생활","noisy","시끄러운"],
["생활","loud","시끄러운"],
["생활","fair","공평한"],
["생활","neutral","중립의"],
["생활","unfair","불공평한"],
["생활","interesting","재미있는"],
["생활","funny","웃긴"],
["생활","boring","지루한"],
["생활","convenient","편리한"],
["생활","inconvenient","불편한"],
]
//["","",""],


