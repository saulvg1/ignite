//base url
const base_url = 'https://api.rawg.io/api/';

//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    //returns two digits every time
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    //returns two digits every time
    return `0${day}`;
  } else {
    return day;
  }
};
//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
//last year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
//next year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
//items per page
const itemsPerPage = 10;
//popular games
//key
const key = '2e3bb90ad51c4ca1bb8d4e749bc59bc6';
const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=${itemsPerPage}`;
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=${itemsPerPage}`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${itemsPerPage}`;
//exports
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
//screen shots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
//searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=${itemsPerPage}`;
