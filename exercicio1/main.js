const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};


//Exercício 1
//a - obter os nomes das empresas
const getCompaniesName = () => {
  const companiesNames = companies.forEach(company => {
    console.log(`Nome da empresa: ${company.name}`);
  })
  return companiesNames;
}
getCompaniesName();

//b - Obter nome das empresas que foi iniciada após 1987
const newestCompanies = () => {
  const newCompanies = companies.filter((company) => company.start > 1987);
  console.log(newCompanies);
  return newCompanies;
}
newestCompanies();

//c - soma de todos os valores do array ages, usando o reduce
const getAgesSum = () => {
  const sum = ages.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(sum);
  return sum;
};
getAgesSum();


//d - novo objeto que tenha as propriedades de name e category iguais a companies[0]
const extractFirstCompany = () => {
  const {name, category} = companies[0];
  console.log(`${name} and ${category}`);
  return;
}
extractFirstCompany();


// e - destructuring da propriedade street e cria uma variável chamada street do objet person.
const extractStreet = () => {
  const {address: street} = person;
  console.log(street);
  return street;
}
extractStreet();

//f - função que devolve as companies que tenham uma data de início superior a 1996 e inferior a 2004, inclusivé.
const getCompaniesStartEndDate = () => {
  const boomerCompanies = companies.filter((company) => company.start > 1996 && company.start <= 2004);
  console.log(boomerCompanies);
  return boomerCompanies;
};
getCompaniesStartEndDate();