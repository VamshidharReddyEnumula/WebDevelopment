import React from 'react';
//import './home.css';
import { Button, Input } from 'reactstrap';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <Input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <Input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <Input className="form-check-input" type="checkbox" name="remember"> Remember me</Input>
                        </label>
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                </form>
            </div>
        );
    }
}

export default Home;
