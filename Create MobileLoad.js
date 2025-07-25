let LoadTracker = {};  
let DailyLimit = 500;

function GetTodayDate() {
  let today = new Date();
  return today.toISOString().split('T')[0];
}

function SendLoad(number, amount) {
  let today = GetTodayDate();

  if (!LoadTracker[number]) {
    LoadTracker[number] = {};
  }

  if (!LoadTracker[number][today]) {
    LoadTracker[number][today] = 0;
  }

  let TotalToday = LoadTracker[number][today];
  if (TotalToday + amount > DailyLimit) {
    console.log(`Load denied for ${number}. Daily limit of ₱500 exceeded. Current: ₱${TotalToday}`);
    return false;
  }

  LoadTracker[number][today] += amount;
  console.log(`Load sent: ₱${amount} to ${number}. Total today: ₱${LoadTracker[number][today]}`);
  return true;
}


SendLoad("09159891981", 400);  
SendLoad("09171588567", 350); 
SendLoad("09171233977", 150); 
