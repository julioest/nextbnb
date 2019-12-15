import houses from './houses.json'
import House from '../components/House'

const Index = () => (
  <div>
    <h2>Places to stay</h2>

    <div className='houses'>
      {houses.map((house, index) => {
        return <House key={index} {...house} />
      })}
    </div>

    <style jsx>{`
      .houses {
        display: grid;
        grid-template-columns: 400px 400px;
        grid-template-rows: 300px 300px;
        grid-gap: 40px;
      }
    `}</style>
  </div>
)

export default Index
