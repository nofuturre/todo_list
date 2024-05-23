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

<h4 align="center"> Przepływ sterowania w aplikacji </h4>

<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/flow_chart.png">
</div>

<h4 align="center"> Model bazy danych </h4>

<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/database_model.png">
</div>

<h4 align="center"> Diagram sekwencji przedstawiający interakcję użytkownika z aplikacją </h4>

<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/diagram_sekwencji.png">
</div>

<h4 align="center"> Widoki poszczególnych składowych aplikacji </h4>

<h5 align="center">Ekran logowania</h5>
<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/login.png">
</div>

<h5 align="center">Ekran rejestracji</h5>
<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/create_account.png">
</div>

<h5 align="center">Lista zadań</h5>
<div align="center">
  <img width="612" alt="image" src="https://github.com/nofuturre/todo_list/blob/main/assets/list_view.png">
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
