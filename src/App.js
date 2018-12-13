import React, { Component } from 'react';
import logo from './logo.svg';
import classes from'./App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'sdsa', name: "alex", age: 24 },
      { id: 'sdde', name: "marta", age: 20 },
      { id: 'sd23', name: "wojrek", age: 23 },
    ],
    showPerson: false,
    test: false
  }




  changeImputHendler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pindex => {
      return pindex.id === id;
    })

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState({ persons: persons });

  }


  togglePersonHendler = () => {
    const doseShow = this.state.showPerson;
    this.setState({ showPerson: !doseShow });
  }

  onClickDeletePerson = (indexPerson) => {
    //const person = this.state.person.slice();
    const person = [...this.state.persons];
    person.splice(indexPerson, 1);
    this.setState({ persons: person });
  }



  render() {
    
    let person = null;
    let buttonClass='';

    if (this.state.showPerson) {
      person = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            click={() => this.onClickDeletePerson(index)}
            key={person.id}
            changed={(event) => this.changeImputHendler(event, person.id)}
          />
        })}

      </div>
      );
      buttonClass=classes.red;
    }

    let classesAvoid = [];

    if (this.state.persons.length <= 2) {
      classesAvoid.push(classes.red );
    }
    if (this.state.persons.length <= 1) {
      classesAvoid.push(classes.bold);
    }

    return(
      <div className={classes.App}>


        <h1>This is my fires app in react.js</h1>
        <p className={classesAvoid.join(" ")} >This realy working!</p>
        <button className={buttonClass} onClick={this.togglePersonHendler}>Switch name</button>
        {person}



      </div>
    );
  }
}


export default App;