import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'> 
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute right-5 top-1/2 w-1/2 rounded-lg border-gray-300 border-8 shadow-2xl" />
                    </div>
                <div className='lg:w-1/2 space-y-7'>
                    <h2 className='text-orange-500  text-2xl font-bold'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;