//XMLHTTPRequest
const getXMLConection = (link) => {
  return new Promise((resolve, reject) => {
    const connection = new XMLHttpRequest();
    connection.responseType = "json";

    connection.onload = () => {
      const data = connection.response;
      resolve(data);
    };
    connection.onerror = () => {
      reject("error getting resource");
    };

    connection.open("GET", link);
    connection.send();
  });
};

const getTextDataOlderWay = () => {
  getXMLConection("https://cat-fact.herokuapp.com/facts/")
    .then((response) => {
      response.forEach((info) => {
        console.log(info.text);
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
getTextDataOlderWay();




//Exercício resolvido com Fetch
const fetchConection = (link) => {
  return fetch(link)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("rejected", err));
};
const getTextData = () => {
  fetchConection("https://cat-fact.herokuapp.com/facts/")
    .then((response) => {
      response.forEach((info) => {
        console.log(info.text);
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
getTextData();
