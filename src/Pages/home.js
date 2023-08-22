import Card from "../Components/card";
import './home.css';

export default function Home() {

    return (
        <>
            <div className="row">
                <Card toUrl='/createUser' title='User' desc='Bonds and stocks are both securities, but the major difference between the two is that (capital) stockholders have an equity stake in a company' btnName='Create User' img='https://media.istockphoto.com/id/1394233106/photo/bonds-word-in-wooden-blocks-with-coins-stacked-in-increasing-stacks.jpg?s=612x612&w=0&k=20&c=qdhoF-ZqU-o_wLm8-BJ8QeXob_IOocBV5blIQ1fgM2A='></Card>
                <Card toUrl='/createDebtur' title='Debtur' desc='Bonds and stocks are both securities, but the major difference between the two is that (capital) stockholders have an equity stake in a company' btnName='Create Debtur' img='https://media.istockphoto.com/id/1394233106/photo/bonds-word-in-wooden-blocks-with-coins-stacked-in-increasing-stacks.jpg?s=612x612&w=0&k=20&c=qdhoF-ZqU-o_wLm8-BJ8QeXob_IOocBV5blIQ1fgM2A='></Card>
            </div>
        </>
    );
}