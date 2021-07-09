// select target on click


// Art, Business & Technology link array variables 

let art = [
    "https://www.amazon.com/First-Bad-Man-Novel/dp/1439172579",
    "https://youtu.be/_2zpl04ka4A",
    "https://www.amazon.com/My-Struggle-Karl-Ove-Knausgaard/dp/0374534144?SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duckduckgo-brave-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0374534144",
    "https://www.amazon.com/White-Women-Helmut-Newton/dp/0930186052?SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duckduckgo-brave-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0930186052",
    "https://vimeo.com/71919803",
    "https://www.amazon.com/Ayn-Rand-Box-Set/dp/0451947673/ref=sr_1_1?keywords=fountain+head+and+atlas+shrugged&qid=1564342987&s=books&sr=1-1",
    "https://open.spotify.com/show/43srgsyieFX5zjq3XqiQmT?si=BsHmRBEDQrCm7QJjibtfQg",
    "https://www.amazon.com/Post-Office-Novel-Charles-Bukowski/dp/0061177571/ref=sr_1_1?keywords=bukowski+post+office&qid=1564359946&s=books&sr=1-1",
    "http://mathworld.wolfram.com/",
    "https://www.youtube.com/watch?v=QcMitpcmb7c",
    "https://www.thebroad.org/",
    "https://www.youtube.com/watch?v=8EqDPBGv12M",
    "https://archillect.com/",
    "https://music.apple.com/us/playlist/coundrum-world-bangers/pl.u-GgA55mRcZ8GxDm",
    "https://music.apple.com/us/album/jesus-is-king/1484936940",
    "https://www.amazon.com/Gospel-According-Green-ROBERT-MUGGE/dp/B07D24T2TY/ref=sr_1_1?keywords=al+green&qid=1572108302&s=instant-video&sr=1-1",
    "https://youtu.be/QuOCvKvrwI8",
    "https://www.youtube.com/watch?v=HIAz_FU8xho",
    "https://www.youtube.com/watch?v=t568Nd7k_Yk",
    "https://www.youtube.com/watch?v=nc4pfmbCgdY",
    "https://music.apple.com/us/album/superbloom/1472817938"

];

let business = [
    "https://pdfs.semanticscholar.org/0375/379194a6f34b818962ea947bff153adf621c.pdf",
    "https://www.amazon.com/Quantum-Economics-New-Science-Money/dp/1785783998/ref=sr_1_1?keywords=quantum+economics&qid=1564336372&s=gateway&sr=8-1",
    "https://www.amazon.com/Naked-Economics-Undressing-Dismal-Science/dp/0393356493/ref=sr_1_1?keywords=naked+economics&qid=1564336414&s=gateway&sr=8-1",
    "https://www.youtube.com/watch?v=B9XGUpQZY38",
    "https://www.youtube.com/watch?v=PHe0bXAIuk0",
    "https://podcasts.apple.com/us/podcast/how-i-built-this-with-guy-raz/id1150510297",
    "https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930",
    "https://www.youtube.com/watch?v=NdtsNh07XnA",
    "https://www.youtube.com/watch?v=wyz79sd_SDA",
    "https://www.amazon.com/Economic-Thought-History-Heinz-Kurz/dp/0231172591",
    "https://www.hulu.com/series/shark-tank-20ed5e79-3fba-4eda-8d84-ed6e33f9a019?cmp=7958&utm_source=bing&utm_medium=cpc&utm_campaign=BM%20Search%20TV%20Shows&utm_term=shark%20tank%20hulu&msclkid=cbd0a0c7874c17f44013fd437fb79372&gclid=CNP-lITk3-QCFU96gQodS2AGpA&gclsrc=ds",
    "https://newrepublic.com/article/154944/boeing-737-max-investigation-indonesia-lion-air-ethiopian-airlines-managerial-revolution",
    "https://www.amazon.com/Find-Fulfilling-Work-School-Life/dp/1250030692?SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duckduckgo-brave-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1250030692",
    "https://www.youtube.com/watch?v=6DlrqeWrczs",
    "https://podcasts.apple.com/us/podcast/recode-media/id1080467174?i=1000451405041",
    "https://www.creditkarma.com/",
    "https://www.mint.com/",
    "https://apps.apple.com/app/id281941097",
    "https://www.youtube.com/watch?v=1g5EVQhD4ao",
    "https://www.amazon.com/Hasbro-B7404-Risk-Game/dp/B01ALHAIWG/ref=sr_1_1?keywords=classic+risk+game&qid=1571092119&sr=8-1",
    "https://www.youtube.com/watch?v=tMe3F8kOLD8"

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

window.open(conundrumRand(randNumTo2)[randNumTo20]);
