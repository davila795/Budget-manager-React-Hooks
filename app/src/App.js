import React, { useState } from 'react';
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'


function App() {

  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showquestion, handleQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])

  const addExpense = expense => {
    setExpenses([...expenses, expense])
  }

  return (
    <div className='container'>
      <header>
        <h1>Weekly expenses</h1>

        <div className='contenido-principal contenido'>
          {showquestion ?
            <Question
              setBudget={setBudget}
              setRest={setRest}
              handleQuestion={handleQuestion}
            />
            :
            <div className='row'>
              <div className='one-half column'>
                <Form
                  addExpense={addExpense}
                />
              </div>
              <div className='one-half column'>
                <List
                  expenses={expenses}
                />

                <BudgetControl
                  budget={budget}
                  rest={rest}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
