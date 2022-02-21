import React from "react";
import { Section, Input, Numbers, Button, Container} from "../style components/calc";

function Calculator() {
    return (
        <Section>
         
            <Input>0</Input>
                <Numbers>
                    <Button className="btn">AC</Button>
                    <Button className="btn">+/-</Button>
                    <Button className="btn">%</Button>
                    <Button className="operator">÷</Button>
                    <Button className="digit">7</Button>
                    <Button className="digit">8</Button>
                    <Button className="digit">9</Button>
                    <Button className="operator">*</Button>
                    <Button className="digit">4</Button>
                    <Button className="digit">5</Button>
                    <Button className="digit">6</Button>
                    <Button className="operator">-</Button>
                    <Button className="digit">1</Button>
                    <Button className="digit">2</Button>
                    <Button className="digit">3</Button>
                    <Button className="operator">+</Button>
                    <Button className="num">0</Button>
                    <Button className="digit">.</Button>
                    <Button className="operator">=</Button>
                </Numbers>
        </Section>
    )
}
export default Calculator;