---
<h1 align="center">TODO list</h1>
<h5 align="center">Projektowanie Aplikacji Internetowych </h5>

---

<p align="center">
  <a href="#introduction">Założenia projektowe</a> •
  <a href="#nit">Narzędzia i technologie</a> •
  <a href="#start">Uruchamianie</a>
</p>

---

## Założenia projektowe <a name="introduction"></a>

Celam projektu jest stworzenie platformy, na której po zalogowaniu można utworzyć listę zadań do wykonania. Każde zadanie opatrzone jest datą, opisem oraz statusem wykonania.

Przepływ sterowania w aplikacji przestawia poniższy diagram:

<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/flow_chart.png">
</div>

Dane aplikacji przechowywane są w następującej formie:

<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/database_model.png">
</div>

Diagram sekwencji przedstawiający interakcję użytkownika z aplikacją:

<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/diagram_sekwencji.png">
</div>

## Narzędzia i technologie <a name="nit"></a>

### Backend

<ul>
    <li>Prisma</li>
    <li>SQLite</li>
    <li>Zod</li>
    <li>JWT</li>
</ul>

### Frontend

<ul>
    <li>React</li>
    <li>HTML</li>
    <li>CSS</li>
</ul>

## Uruchamianie <a name="start"></a>

Do uruchomienia aplikacji potrzebny jest zainstalowany node.js.

W folderach client oraz server uruchomić polecenia:

npm install

npm run dev
