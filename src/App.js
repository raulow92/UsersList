import { useState } from "react";
import { InitialUsers } from "./Users";
import Table from "./Table";
import "./index.css";

function App() {
    const [search, setSearch] = useState("");
    const [usersList, setUsersList] = useState(InitialUsers);
    const [person, setPerson] = useState({
      name: "",
      surname: "",
      email: ""
    })

    const searcher = (data) => {
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(search) ||
                item.surname.toLowerCase().includes(search) ||
                item.email.toLowerCase().includes(search)
        );
    };

    const addUser = () => {
        let index = usersList.length + 1;

        if (person.name === "" || person.surname === "" || person.email === ""){
          return
        }

        setUsersList([
            ...usersList,
            {
                id: index,
                name: person.name,
                surname: person.surname,
                email: person.email,
            },
        ]);

        setPerson({name: "", surname: "", email: ""})

        console.log(usersList);
    };

    const handleName = (e) => {
      setPerson({
        ...person,
        name: e.target.value
      });
    }

    const handleSurname = (e) => {
      setPerson({
        ...person,
        surname: e.target.value
      });
    }

    const handleEmail = (e) => {
      setPerson({
        ...person,
        email: e.target.value
      });
    }

    return (
        <div className="content">
            <aside>
                <div className="title">
                    <h1>Users List</h1>
                    <h2>College Championship</h2>
                </div>
                <div className="newUser">
                    <h3>Add new User</h3>
                    <input
                        placeholder="Name"
                        onChange={handleName}
                        value={person.name}
                    ></input>
                    <input
                        placeholder="Surname"
                        onChange={handleSurname}
                        value={person.surname}
                    ></input>
                    <input
                        placeholder="Email"
                        onChange={handleEmail}
                        value={person.email}
                    ></input>
                    <button onClick={addUser}>+ Add</button>
                </div>
            </aside>
            <main>
                <div className="containerInput">
                    <h2>Filter by Name, Surname or Email</h2>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase())
                        }
                    ></input>
                </div>
                <div className="containerTable">
                    <Table data={searcher(usersList)} />
                </div>
            </main>
        </div>
    );
}

export default App;
