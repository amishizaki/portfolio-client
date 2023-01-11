import { Card } from 'react-bootstrap'
import JonesImages from "./shared/JonesImages"

const Jones = () => {
    return (
        <div>
            <h4>
                Thank you for being curious! This page is devoted to Jones the Cat
            </h4>
                <br/>
                <p className='cat-intro'>
                    In the year of 2022, I adopted little Jones from a rescue in Vermont.
                </p> 
                <p className='cat-intro'>

                    Since then, I have watched him grow from a tiny furball of energy to a larger furball of energy.
                </p>
                <p className='cat-intro'>
                    Below are a few snapshots of the delightfully rambunctious life of Jones the Cat.
                </p>
                <br/> 

            <Card className='cat-card'>

                <Card.Img 
                    className='cat-img' 
                    src={JonesImages['Tunnel']} 
                    alt='Jones the Cat peering through a small cat-sized tunnel at the viewer. The word love is written artistically all over the tunnel' 
                />
            </Card>

            <Card className='cat-card'>

                <Card.Img 
                    className='cat-img' 
                    src={JonesImages['Tunnel2']} 
                    alt='Jones the Cat lying down in the same cat-sized tunnel as before.' 
                />
            </Card>

            <Card className='cat-card'>
                <Card.Img 
                    className='cat-img' 
                    src={JonesImages['Table']} 
                    alt='A Young Jones sitting majestically atop a table.His background includes a print image of a dog dressed as an admiral, an antique horse print, princess leia print, and a large mirror with a golden frame propped against the wall.' 
                />
            </Card>

            <Card className='cat-card'>
                <Card.Img 
                    className='cat-img' 
                    src={JonesImages['UpsideDown']} 
                    alt='A slightly older Jones lying down on an old chair with old pillows behind him. He makes intense eye contact with the viewer' 
                />
            </Card>

            <Card className='cat-card'>
                <Card.Img 
                    className='cat-img' 
                    src={JonesImages['Box']} 
                    alt='Jones comfortably asleep in a random box.' 
                />
            </Card>

            <Card className='cat-card'>
                <Card.Img 
                    className='cat-img' 
                    src={JonesImages['Sleepy']} 
                    alt='Jones comfortably asleep in his cushy bed.' 
                />
            </Card>

        </div>
    )
}

export default Jones