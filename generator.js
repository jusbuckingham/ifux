// a function to be called in the html file

function myGenerator() { 


// Art, Business & Technology link array variables 

let art = [
    "https://www.youtube.com/watch?v=B_ymY0xG0LI",
    "https://www.youtube.com/watch?v=zIKK-q9Gqk8",
    "https://www.youtube.com/watch?v=d5XTDmm0KUQ",
    "https://www.radiohead.com/",
    "https://www.youtube.com/watch?v=ju2Lowqknv8",
    "https://www.youtube.com/watch?v=ISHPumshGgA",
    "http://www.openculture.com/philosophy_free_courses",
    "https://www.youtube.com/watch?v=cozdRqf2H7o",
    "https://www.youtube.com/watch?v=dj08WrdVt9E",
    "https://www.youtube.com/watch?v=S5KwSWWwKxk",
    "http://www.theoperadatabase.com/operaindex.html",
    "https://www.netflix.com/title/80217478",
    "https://kinfolk.com/",
    "https://hassan1.bandcamp.com/album/getting-2-old-4-this",
    "https://www.youtube.com/watch?v=t-j0Ey2O4HU",
    "https://www.youtube.com/watch?v=-QbpgLK-P_c",
    "https://www.youtube.com/watch?v=Sq8noTsKSwg",
    "https://www.youtube.com/watch?v=AwhBTrzzqeg",
    "https://hassan1.bandcamp.com/album/getting-2-old-4-this",
    "https://www.youtube.com/watch?v=laamYjSwcHI",
    "https://www.youtube.com/watch?v=5MlVXco6cVw"

];

let business = [
    "https://www.youtube.com/watch?v=4aenIrIpNqQ",
    "https://www.youtube.com/watch?v=HZcXup7p5-8&list=PLxq_lXOUlvQAwaY_9K4ZFH9Xdar9WzCaL&index=37&t=0s",
    "https://www.youtube.com/watch?v=NrBbDnuV8Cw&list=LL1x_nY-5JUOwo9sAgvmQJ9Q&index=56&t=0s",
    "https://hackernoon.com/the-big-6-activities-in-digital-marketing-4wr32ch?source=rss",
    "https://hackernoon.com/wealth-a-new-era-of-economics-ce8acd785441",
    "https://www.youtube.com/watch?v=tq1kvyC-6ek",
    "https://www.youtube.com/watch?v=xl32J4TCS0E",
    "https://www.youtube.com/watch?v=f3NBQcAqyu4",
    "https://podcasts.apple.com/us/podcast/hotboxin-with-mike-tyson/id1449316560?i=1000462357544",
    "https://www.youtube.com/watch?v=S8yjzUqK1zQ",
    "https://www.youtube.com/channel/UCIALMKvObZNtJ6AmdCLP7Lg/videos",
    "https://www.youtube.com/channel/UCqcy7yHkQCC3-TyEhBNrCTA/videos",
    "https://www.youtube.com/watch?v=nZlvs7IKSkA&list=PL5C14B375A7F2FEA8&index=29",
    "https://www.youtube.com/watch?v=_Y-koup5qgc&feature=emb_title",
    "https://www.coursera.org/specializations/digital-marketing",
    "https://en.wikipedia.org/wiki/Business_rule",
    "https://www.youtube.com/watch?v=HIY8A8ccfKM",
    "https://www.youtube.com/watch?v=AgBHfmf2JhQ",
    "https://www.youtube.com/watch?v=9-tjY-DG5-0",
    "https://www.coursera.org/specializations/product-management",
    "https://www.teamblind.com/"

];

let technology = [
    "https://libra.org/en-US/white-paper/#introduction",
    "https://www.codecademy.com/learn/introduction-to-blockchain",
    "https://podcasts.apple.com/us/podcast/unconfirmed-insights-analysis-from-top-minds-in-crypto/id1347049808",
    "https://www.hacksplaining.com/lessons",
    "https://www.udemy.com/share/100ZfUB0UacVdSRHw=/?xref=E0UdcF5bRX0BSV82AT0GJVUWTx4dChQ%2BVFE=",
    "https://brave.com/",
    "https://podcasts.apple.com/us/podcast/software-engineering-daily/id1019576853",
    "https://www.kaggle.com/",
    "https://www.vice.com/en_us/article/d3naek/how-to-make-a-phone-farm",
    "https://www.youtube.com/watch?v=bBC-nXj3Ng4",
    "https://www.lynda.com/",
    "https://www.youtube.com/watch?v=2izvSzQWYak",
    "https://en.wikipedia.org/wiki/White_paper",
    "https://jeffhuang.com/best_paper_awards.html",
    "https://archive.org/details/apple-ii-ref-manual",
    "https://deepai.org/",
    "https://blog.lightning.engineering/posts/2019/08/15/routing-quide-1.html",
    "https://www.youtube.com/channel/UCNc-Wa_ZNBAGzFkYbAHw9eg/videos",
    "https://www.youtube.com/channel/UCrM7B7SL_g1edFOnmj-SDKg",
    "http://blockchainlab.com/pdf/Ethereum_white_paper-a_next_generation_smart_contract_and_decentralized_application_platform-vitalik-buterin.pdf",
    "https://www.youtube.com/channel/UCwgKmJM4ZJQRJ-U5NjvR2dg"

];

// returns a number 0-2 as a variable

let randNumTo2 = 0 + Math.floor(Math.random() * 3);

// returns a number 0-20 as a variable

let randNumTo20 = 0 + Math.floor(Math.random() * 21);

// Create a variable that uses the random number to assign to one of the link varibales & returns a link based on the randomized number and assigns it to a new variable

function conundrumRand(randNumTo2) {
    let linkVar;
    if (randNumTo2 = 0) {
      linkVar = art;
    } else if (randNumTo2 = 1) {
      linkVar = business;
    } else {
        linkVar = technology;
    }
    return linkVar;
  }
  console.log(conundrumRand(randNumTo2)[randNumTo20]);

  // opens returned link in a new tab with new variable created

window.open(conundrumRand(randNumTo2)[randNumTo20])};
