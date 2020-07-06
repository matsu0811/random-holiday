'use strict';






if (pages === 1) {
    $("#places").html("Kamakura");
    $("#p-name").html("高徳院");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("高徳院（こうとくいん）は、神奈川県鎌倉市長谷にある浄土宗の寺院。本尊は「鎌倉大仏」「長谷の大仏」として知られる阿弥陀如来像（国宝）。山号は大異山。詳しくは大異山高徳院清浄泉寺（しょうじょうせんじ）という。開基（創立者）と開山（初代住職）はともに不詳である。2004年（平成16年）2月27日、境内一帯が「鎌倉大仏殿跡」の名称で国の史跡に指定された。なお、大仏の造立経緯や、大仏殿の倒壊時期については諸説ある。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.568417497642!2d139.5339649152793!3d35.31670385748459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601845f2df49bc05%3A0x1ec393b02d6bef4c!2z6Y6M5YCJ5aSn5LuP5q6_6auY5b6z6Zmi!5e0!3m2!1sja!2sjp!4v1581399571676!5m2!1sja!2sjp");
    $("#f-name").html("鎌倉");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '高徳院';
} else if (pages === 2) {
    $("#places").html("Fujisawa");
    $("#p-name").html("江の島");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("江の島（えのしま）は、神奈川県藤沢市にある湘南海岸から相模湾へと突き出た陸繋島であり、一般的に使用される周囲360度が海に囲まれた島では無い特性を有する地名および町名である。片瀬地区（旧片瀬町地域）に属する。江の島一丁目及び江の島二丁目があり、全域で住居表示が実施されている。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512.389153778048!2d139.4766160781723!3d35.30114642113874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184ee6a0890aa5%3A0x4fe5988514a5aec!2z44CSMjUxLTAwMzYg56We5aWI5bed55yM6Jek5rKi5biC5rGf44Gu5bO2!5e0!3m2!1sja!2sjp!4v1581822241703!5m2!1sja!2sjp");
    $("#f-name").html("江の島");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '江の島';
}　else if (pages === 3) {
    $("#places").html("Yokohama");
    $("#p-name").html("横浜赤レンガ倉庫");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("横浜赤レンガ倉庫（よこはまあかレンガそうこ、Yokohama Red Brick Warehouse）は、神奈川県横浜市中区新港一丁目の横浜港にある歴史的建築物である。明治政府によって保税倉庫として建設され、建設当時の正式名称は横浜税関新港埠頭倉庫。みなとみらい地区内の2街区に当たる。2号館は1911年（明治44年）、1号館は1913年（大正2年）に竣工。保税倉庫としての役割は1989年（平成元年）までに終え、しばらく放置されていた。2002年（平成14年）に、1号館は展示スペース、ホールなどの文化施設、2号館は商業施設となり、付近一帯は広場と公園を備える赤レンガパークとして整備され、横浜みなとみらい21地区の代表的な観光施設となっている。第45回BCS賞（2004年）受賞。2007年（平成19年）、経済産業省による近代化産業遺産に認定。2010年（平成22年）、日本初の「ユネスコ文化遺産保全のためのアジア太平洋遺産賞」優秀賞受賞。本項では赤レンガ倉庫とともに新港埠頭の歴史についても記述する。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.0888637506587!2d139.64070571576818!3d35.45259438024827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cf885807149%3A0x94947dd82acc3d73!2z5qiq5rWc6LWk44Os44Oz44Ks5YCJ5bqrIDLlj7fppKg!5e0!3m2!1sja!2sjp!4v1581929546610!5m2!1sja!2sjp");
    $("#f-name").html("横浜");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '横浜赤レンガ倉庫';
}　else if (pages === 4) {
    $("#places").html("Yokohama");
    $("#p-name").html("横浜中華街");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("横浜中華街（よこはまちゅうかがい）は、神奈川県横浜市中区山下町一帯に所在するチャイナタウン（中華街）である。1955年以前は唐人町や南京町と呼ばれていた。華僑の出身地は広東省が比較的多いが、中国各地に分散している。上海路、中山路、福建路など、地名を冠した路地が交差しており、各路地には、当該地の出身者が多い。所在地である中区の中国人人口は6000人を超える。これは同区で登録されている外国人の約4割に当たる。約0.2平方キロのエリア内に500店以上の店舗があり、日本最大かつ東アジア最大の中華街となっている。1866年（慶応2年）の横浜新田慰留地から数えると150年強の歴史をもつことになる。日本では、神戸南京町や長崎新地中華街とともに「三大中華街」とされる。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.502221815726!2d139.6441994157677!3d35.44235908025071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cef7b8bffff%3A0x90abf0214d828f35!2z5qiq5rWc5Lit6I-v6KGX!5e0!3m2!1sja!2sjp!4v1581929854118!5m2!1sja!2sjp");
    $("#f-name").html("横浜");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '横浜中華街';
}　else if (pages === 5) {
    $("#places").html("Yokohama");
    $("#p-name").html("山下公園");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("山下公園は関東大震災の復興事業として、横浜市助役だった楢岡徹らが瓦礫などを使って海を埋め立て造成して、1930年（昭和5年）3月15日に開園した。面積は 74,121m2。なお、横浜市は「日本最初の臨海公園」としている。開園後40年にわたり、公園前面の海面を埋め立て埠頭とする計画が提出されるも、これは実現せず、後に東の隣接地に山下埠頭が造成された。現在、同海面地下にはトンネル構造の臨港幹線道路が計画されている。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.364211746547!2d139.647392915768!3d35.44577668024978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185ce2b1bb57b7%3A0xe3ba49f16272376c!2z5bGx5LiL5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1581930139327!5m2!1sja!2sjp");
    $("#f-name").html("横浜");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '山下公園';
}　else if (pages === 6) {
    $("#places").html("Yokohama");
    $("#p-name").html("八景島シーパラダイス");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("横浜・八景島シーパラダイス（よこはまはっけいじまシーパラダイス）は、神奈川県横浜市金沢区八景島にある水族館・遊園地・ショッピングモール・ホテル・マリーナなどで構成した複合型海洋レジャー施設である。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.7359853317985!2d139.64370811576563!3d35.33737708027607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601841797ab6104d%3A0x4165a6dc508fcd47!2z5qiq5rWc44O75YWr5pmv5bO244K344O844OR44Op44OA44Kk44K5!5e0!3m2!1sja!2sjp!4v1581930377181!5m2!1sja!2sjp");
    $("#f-name").html("横浜");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '八景島シーパラダイス';
}　else if (pages === 7) {
    $("#places").html("Kamakura");
    $("#p-name").html("鶴岡八幡宮");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("鶴岡八幡宮（つるがおかはちまんぐう）は、神奈川県鎌倉市雪ノ下にある神社。旧社格は国幣中社で、現在は神社本庁の別表神社。別称として鎌倉八幡宮とも呼ばれる。武家源氏、鎌倉武士の守護神。鎌倉初代将軍源頼朝ゆかりの神社として全国の八幡社の中では関東方面で知名度が高く、近年では三大八幡宮の一社に入ることがある。境内は国の史跡に指定されている。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.2401567117586!2d139.5538813157655!3d35.324857380278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601845b87890aa89%3A0xa867ad10105036b5!2z6ba05bKh5YWr5bmh5a6u!5e0!3m2!1sja!2sjp!4v1581930800568!5m2!1sja!2sjp");
    $("#f-name").html("鎌倉");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '鶴岡八幡宮';
}　else if (pages === 8) {
    $("#places").html("Hakone");
    $("#p-name").html("大涌谷");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("大涌谷（おおわくだに）は、神奈川県箱根町にある箱根火山の火山性地すべりによる崩壊地形。箱根火山の中央火口丘である冠ヶ岳の標高800mから1000mの北側斜面にあり、地熱地帯で活発な噴気地帯でもある。箱根火山に多数有る噴気地帯の中では最大規模のものである。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.5285075571715!2d139.0176953157637!3d35.24310538029885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60199f37c8e10d7f%3A0xa1a85246ffb15c8a!2z5aSn5raM6LC3!5e0!3m2!1sja!2sjp!4v1581931023971!5m2!1sja!2sjp");
    $("#f-name").html("箱根");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '大涌谷';
}　else if (pages === 9) {
    $("#places").html("Odawara");
    $("#p-name").html("小田原城");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("小田原城（おだわらじょう）は、神奈川県小田原市にあった、戦国時代から江戸時代にかけての日本の城（平山城）で、北条氏の本拠地として有名である。江戸時代には小田原藩の藩庁があった。城跡は国の史跡に指定されている。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.2132861294235!2d139.15132491576387!3d35.25094928029676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a4f9eeaa0651%3A0x7abfbd1ba781f8c2!2z5bCP55Sw5Y6f5Z-O!5e0!3m2!1sja!2sjp!4v1581931181006!5m2!1sja!2sjp");
    $("#f-name").html("小田原");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '小田原城';
}　else if (pages === 10) {
    $("#places").html("Kawasaki");
    $("#p-name").html("藤子・F・不二雄ミュージアム");
    $(".result-main-contents-pic img").attr("src", "../images/page-images/page" + pages + ".jpg");
    $("#p-description").html("川崎市 藤子・F・不二雄ミュージアム（かわさきし ふじこ・エフ・ふじおミュージアム）は、神奈川県川崎市多摩区に立地する、漫画家藤子・F・不二雄（藤本弘）の作品原画やその関連資料を中心に展示する博物館である。2011年（平成23年）9月3日開館。");
    $(".result-map iframe").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.7219045366596!2d139.5713777157715!3d35.60992588021099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f12b615b3309%3A0xf707f79e8f7e3f85!2z5bed5bSO5biCIOiXpOWtkOODu0bjg7vkuI3kuozpm4Tjg5_jg6Xjg7zjgrjjgqLjg6A!5e0!3m2!1sja!2sjp!4v1581931426232!5m2!1sja!2sjp");
    $("#f-name").html("川崎");
    document.getElementById('textarea-page').textContent = pages;
    document.getElementById('textarea-prefecture').textContent = '神奈川';
    document.getElementById('textarea-place').textContent = '藤子・F・不二雄ミュージアム';
}