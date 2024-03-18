import {useEffect, useState} from "react"
import { getAllTickets } from "./services/ticketService"
import "./App.css"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  // the function is what needs to happen, the array is when it needs to happen
  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
    })
  }, []) // ONLY runs on initial render of component
  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <article className="tickets">
        {allTickets.map(ticket => {
          return (
            <section className="tickets">
              <header className="ticket-info">#{ticket.id}</header>
              <div>{ticket.description}</div>
              <footer>
                <div>
                  <div className="ticket-info">emergency</div>
                  <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
              </footer>
            </section>
          )
        })}
      </article>
    </div>
  )
}
