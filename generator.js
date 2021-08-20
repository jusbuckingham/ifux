function myGenerator() { 
  
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
      "https://youtu.be/Do5DkAlOyuY",
      "https://progressivetooling.com/",
      "https://blog.stephsmith.io/tutorial-google-sheets-api-node-js/",
      "https://en.wikipedia.org/wiki/.NET_Framework",
      "https://www.youtube.com/watch?v=J8Eh7RqggsU",
      "https://en.wikipedia.org/wiki/Receiver_operating_characteristic",
      "https://netflixtechblog.com/open-sourcing-metaflow-a-human-centric-framework-for-data-science-fa72e04a5d9",
      "https://en.wikipedia.org/wiki/Functional_programming",
      "https://en.wikipedia.org/wiki/Lambda_calculus",
      "https://en.wikipedia.org/wiki/Object-oriented_programming",
      "https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/",
      "https://en.wikipedia.org/wiki/Strong_and_weak_typing",
      "https://www.youtube.com/watch?v=q7oILIZVsiY",
      "https://www.youtube.com/watch?v=bMjWdz_Hi_Q",
      "https://github.com/NationalSecurityAgency/ghidra",
      "https://en.wikipedia.org/wiki/Linked_list",
      "https://en.wikipedia.org/wiki/Skip_list",
      "https://en.wikipedia.org/wiki/Hash_table",
      "https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm",
      "https://en.wikipedia.org/wiki/Bitap_algorithm",
      "https://www.youtube.com/watch?v=HXV3zeQKqGY&feature=emb_title"

];

// returns a number 0-2 as a variable

let randNumTo2 = 0 + Math.floor(Math.random() * 3);

// returns a number 0-20 as a variable

let randNumTo20 = 0 + Math.floor(Math.random() * 21);

// creates a variable that uses the random number to assign to one of the link varibales & returns a link based on the randomized number and assigns it to a new variable

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
