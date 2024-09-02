const lettersCon = document.querySelector(".grid-letters-con")
let amharicLetterLength = 11;
const amhLetters = ["ሀ-ha", "ሁ-hu", "ሂ-hee", "ሃ-ha", "ሄ-hae", "ህ-heh", "ሆ-ho", "ለ-le", "ሉ-lu", "ሊ-lee", "ላ-la", "ሌ-lay", "ል-leh", "ሎ-lo", "ሐ-ha", "ሑ-hu", "ሒ-hee", "ሓ-ha", "ሔ-hae", "ሕ-heh", "ሖ-ho", "መ-muh", "ሙ-moo", "ሚ-mee", "ማ-ma", "ሜ-mae", "ም-mih", "ሞ-mo", "ሠ-seh", "ሡ-soo", "ሢ-see", "ሣ-sa", "ሤ-sae", "ሥ-sih", "ሦ-so", "ረ-reh", "ሩ-roo", "ሪ-ree", "ራ-ra", "ሬ-rae", "ር-rih", "ሮ-ro", "ሰ-seh", "ሱ-soo", "ሲ-see", "ሳ-sa", "ሴ-sae", "ስ-sih", "ሶ-so", "ሸ-sheh", "ሹ-shoo", "ሺ-shee", "ሻ-sha", "ሼ-shae", "ሽ-shih", "ሾ-sho", "ቀ-qeh", "ቁ-qoo", "ቂ-qee", "ቃ-qa", "ቄ-qae", "ቅ-qih", "ቆ-qo", "በ-beh", "ቡ-boo", "ቢ-bee", "ባ-ba", "ቤ-bae", "ብ-bih", "ቦ-bo", "ቨ-veh", "ቩ-voo", "ቪ-vee", "ቫ-va", "ቬ-vae", "ቭ-vih", "ቮ-vo", "ተ-teh", "ቱ-too", "ቲ-tee", "ታ-ta", "ቴ-tae", "ት-tih", "ቶ-to", "ቸ-cheh", "ቹ-choo", "ቺ-chee", "ቻ-cha", "ቼ-chae", "ች-chih", "ቾ-cho", "ኀ-ha", "ኁ-hu", "ኂ-hee", "ኃ-ha", "ኄ-hae", "ኅ-heh", "ኆ-ho", "ነ-neh", "ኑ-noo", "ኒ-nee", "ና-na", "ኔ-nae", "ን-nih", "ኖ-no", "ኘ-gneh", "ኙ-gnoo", "ኚ-gnee", "ኛ-gna", "ኜ-gnae", "ኝ-gnih", "ኞ-gno", "አ-aa", "ኡ-oo", "ኢ-ee", "ኣ-aa", "ኤ-ae", "እ-ih", "ኦ-o", "ከ-keh", "ኩ-koo", "ኪ-kee", "ካ-ka", "ኬ-kae", "ክ-kih", "ኮ-ko", "ኸ-huh", "ኹ-hu", "ኺ-hee", "ኻ-ha", "ኼ-hae", "ኽ-heh", "ኾ-ho", "ወ-weh", "ዉ-woo", "ዊ-wee", "ዋ-wa", "ዌ-wae", "ው-wih", "ዎ-wo", "ዐ-aa", "ዑ-oo", "ዒ-ee", "ዓ-aa", "ዔ-ae", "ዕ-ih", "ዖ-o", "ዘ-ze", "ዙ-zu", "ዚ-zee", "ዛ-zaa", "ዜ-zae", "ዝ-zih", "ዞ-zo", "ዠ-zjeh", "ዡ-zjoo", "ዢ-zjee", "ዣ-zjaa", "ዤ-zjae", "ዥ-zjih", "ዦ-zjo", "የ-ye", "ዩ-yu", "ዪ-yee", "ያ-yaa", "ዬ-yae", "ይ-yih", "ዮ-yo", "ደ-duh", "ዱ-doo", "ዲ-dee", "ዳ-daa", "ዴ-dae", "ድ-dih", "ዶ-do", "ጀ-je", "ጁ-joo", "ጂ-jee", "ጃ-jaa", "ጄ-jae", "ጅ-jih", "ጆ-jo", "ገ-guh", "ጉ-goo", "ጊ-gee", "ጋ-ga", "ጌ-gae", "ግ-gih", "ጎ-go", "ጠ-tte", "ጡ-ttu", "ጢ-ttee", "ጣ-ttaa", "ጤ-ttae", "ጥ-ttih", "ጦ-tto", "ጨ-chhe", "ጩ-chhoo", "ጪ-chhee", "ጫ-chhaa", "ጬ-chhae", "ጭ-chhih", "ጮ-cho", "ጰ-ppuh", "ጱ-ppoo", "ጲ-ppee", "ጳ-ppaa", "ጴ-ppae", "ጵ-ppih", "ጶ-ppo", "ጸ-tse", "ጹ-tsoo", "ጺ-tsee", "ጻ-tsaa", "ጼ-tsae", "ጽ-tsih", "ጾ-tso", "ፀ-tse", "ፁ-tsoo", "ፂ-tsee", "ፃ-tsaa", "ፄ-tsae", "ፅ-tsih", "ፆ-tso", "ፈ-fuh", "ፉ-foo", "ፊ-fee", "ፋ-faa", "ፌ-fae", "ፍ-fih", "ፎ-fo", "ፐ-peh", "ፑ-poo", "ፒ-pee", "ፓ-paa", "ፔ-pae", "ፕ-pih", "ፖ-po",]
for (let i = 0; i < amhLetters.length; i++) {
    lettersCon.innerHTML += getSingleLetter(amhLetters[i].split("-")[0])
}
function getSingleLetter(letter) {
    return `<div class="single-letter-div">${letter}</div>`
}

// document.addEventListener('DOMContentLoaded', () => {
//     const audio = document.getElementById('audio');
//     const playButton = document.getElementById('playButton');
//     const stopButton = document.getElementById('stopButton');

//     playButton.addEventListener('click', () => {
//         audio.play();
//     });

//     stopButton.addEventListener('click', () => {
//         audio.pause();
//         audio.currentTime = 0;
//     });
// });
