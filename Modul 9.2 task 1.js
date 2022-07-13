const parser = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student2>
    <name2 lang2="ru">
      <first2>Петр</first2>
      <second2>Петров</second2>
    </name2>
    <age2>58</age2>
    <prof2>driver</prof2>
  </student2>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const langAttr = nameNode.getAttribute('lang');
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");


const student2Node = listNode.querySelector("student2");
const name2Node = student2Node.querySelector("name2");
const lang2Attr = name2Node.getAttribute('lang2');
const firstNameNode = name2Node.querySelector("first2");
const secondNameNode = name2Node.querySelector("second2");
const age2Node = student2Node.querySelector("age2");
const prof2Node = student2Node.querySelector("prof2");

const resultStudent = {
  name: firstNode.textContent + secondNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: langAttr
}

const resultStudent2 = {
  name: firstNameNode.textContent + secondNameNode.textContent,
  age: Number(age2Node.textContent),
  prof: prof2Node.textContent,
  lang: lang2Attr
}

console.log(resultStudent, resultStudent2);