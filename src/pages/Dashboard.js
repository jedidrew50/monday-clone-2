import TicketCard from '../components/TicketCard'

const Dashboard = () => {

const tickets = [
    {
        category: 'Q1 2022',
        color: 'red',
        title: 'NFT Safety 101 Video',
        owner: 'Drew Norman',
        avatar: 'https://avatars.githubusercontent.com/u/88216697?v=4',
        status: 'done',
        priority: 5,
        progress: 40,
        description: 'Make a video showcasing how to work with NFTs safely',
        timestamp: '2022-02-11T07:36:17+0000'

    },
    {
        category: 'Q1 2022',
        color: 'red',
        title: 'Lego Star Wars The Skywalker Saga',
        owner: 'Drew Norman',
        avatar: 'https://avatars.githubusercontent.com/u/88216697?v=4',
        status: ' work in progress',
        priority: 2,
        progress: 70,
        description: 'Download and play the free demo today at GameStop.com',
        timestamp: '2022-04-05T07:36:17+0000'

    },
    {
        category: 'Q2 2022',
        color: 'blue',
        title: 'Build the Razor Crest from Star Wars the Mandolorian',
        owner: 'Drew Norman',
        avatar: 'https://avatars.githubusercontent.com/u/88216697?v=4',
        status: ' work in progress',
        priority: 3,
        progress: 10,
        description: 'Purchase your lego gear on Amazon.com',
        timestamp: '2022-04-15T07:36:17+0000'

    }
]

const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category))
]


    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) =>(
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                        .map((filteredTicket, _index) => (
                            <TicketCard 
                            id={_index}
                            color={filteredTicket.color}
                            ticket={filteredTicket}
                            />
                        ))
                        }

                    </div>
                ))} 

            </div>
        </div>
    )
}

export default Dashboard