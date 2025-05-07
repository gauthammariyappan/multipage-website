function getRandomName() {
  const firstName = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank",
  "Grace", "Hannah", "Isaac", "Jack", "Katherine", "Liam",
  "Olivia", "Noah", "Sophia", "Michael", "Elizabeth", "William",
  "Ava", "James", "Mia", "John", "Ella", "Robert",
  "Emily", "Joseph", "Sofia", "Daniel", "Chloe", "Matthew"];
  const lastName = ["Smith", "Johnson", "Williams", "Brown", "Davis", "Miller",
  "Wilson", "Moore", "Lee", "Taylor", "Anderson", "Thomas",
  "Martinez", "Harris", "Martin", "Jackson", "Garcia", "Jones",
  "Lopez", "Clark", "White", "Rodriguez", "Lewis", "Hall",
  "Walker", "Young", "King", "Hill", "Scott", "Adams"];
  
  let randomName = sessionStorage.getItem('randomName');
  
  if (!randomName) {
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    sessionStorage.setItem('randomName', randomFirstName+' '+randomLastName);
    return `${randomFirstName} ${randomLastName}`;
  }
  return randomName;
  
}

function getAppKey(){
  let appKey = sessionStorage.getItem('appKey');
  if (!appKey) {
    if (Math.random() < 0.5) {
      appKey = '27a4a87d6e27e86a7cd64de89cb3ec8d';//Delivery Site
    } else {
      appKey = 'c012eed591418a9aa7e1655a6bb83039';//zylker
    }
    sessionStorage.setItem('appKey', appKey);
  }
  return appKey;

}

(function(w,d,s,r,k,h,m){
	if(w.performance && w.performance.timing && w.performance.navigation) {
		w[r] = w[r] || function(){(w[r].q = w[r].q || []).push(arguments)};
		h=d.createElement('script');h.async=true;h.setAttribute('src',s+k);
		d.getElementsByTagName('head')[0].appendChild(h);
		(m = window.onerror),(window.onerror = function (b, c, d, f, g) {
		m && m(b, c, d, f, g),g || (g = new Error(b)),(w[r].q = w[r].q || []).push(["captureException",g]);})
	}
})(window,document,'//static.site24x7rum.com/beacon/site24x7rum-min.js?appKey=','s247r',getAppKey());
s247r('setWaterfallsSamplingRate',1);
s247r('userId',getRandomName());
const allowedUrls = [
            /.*/
        ];
s247r('recordSession',{//No I18N
    "trackEvents":true,//No I18N
    "trackConsoleEvents":true,//No I18N
    "captureAllWaterfalls":false,//No I18N
    "maskAllInput":true,//No I18N
    "maskAllText":true,//No I18N
    "collectNetworkDetails":true,//No I18N
    "allowedNetworkUrls": allowedUrls//No I18N
});
