import React, { useState } from 'react'
import styled from 'styled-components';


function ToDo() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Buy 1 kg Tomato"
        },
        {
            id: 2,
            title: "Buy 2 kg Onion"
        },
        {
            id: 3,
            title: "Visit Friend"
        },
        {
            id: 4,
            title: "Cleen House"
        },
    ])
    const [completedItems, setCompletedItems] = useState([
        {
            id: 5,
            title: "Washing Clothes"
        },
        {
            id: 6,
            title: "Play Cricket"
        },
        {
            id: 7,
            title: "1 km Walking"
        },
        {
            id: 8,
            title: "Do HomeWork"
        },
    ])

    const [NewItems, setNewItems] = useState("")

    const UpdateItem = (e) => {
        e.preventDefault();
        let NewItem = {
            title: NewItems,
        }
        setItems([...items, NewItem])
        setNewItems("")
    }

    const removeItem = (id) => {
        let new_item = items.filter((item) => item.id !== id);
        setItems(new_item)
    };
    const removeCompletedItem = (id) => {
        let new_item = completedItems.filter((item) => item.id !== id);
        setCompletedItems(new_item)
    };
    const completedThings = (id) => {
        let myItems = items.find((item) => item.id == id);
        setCompletedItems([...completedItems, myItems])

        let new_item = items.filter((item) => item.id !== id);
        setItems(new_item)
    };
    const revertItems = (id) => {
        let myItems = completedItems.find((item) => item.id == id);
        setItems([...items, myItems])

        let new_item = completedItems.filter((item) => item.id !== id);
        setCompletedItems(new_item)
    };

    const renderItems = () => {
        return items.map((items) => (
            <ListItem>
                <LeftContent>
                    <CheckBtn onClick={() => completedThings(items.id)}></CheckBtn>
                    <Content>{items.id}, {items.title}</Content>
                </LeftContent>
                <RightContent>
                    <DeleteBtn onClick={() => removeItem(items.id)}>
                        <BtnImage src={require("../assets/delete.svg").default} alt="Delete" />
                    </DeleteBtn>
                </RightContent>
            </ListItem>
        ))
    }
    const renderCompleted = () => {
        return completedItems.map((completedItems) => (
            <ListItem>
                <LeftContent>
                    <GreenTick>
                        <TickImage src={require("../assets/tick-green.svg").default} alt="Tick" />
                    </GreenTick>
                    <Content>{completedItems.id}, {completedItems.title}</Content>
                </LeftContent>
                <RightContent>
                    <BackBtn  onClick={() => revertItems(completedItems.id)}>
                        <BackImage src={require("../assets/revert.svg").default} alt="Revert" />
                    </BackBtn>
                    <DeleteBtn onClick={() => removeCompletedItem(completedItems.id)}>
                        <BtnImage src={require("../assets/delete.svg").default} alt="Delete" />
                    </DeleteBtn>
                </RightContent>
            </ListItem>
        ))
    }

    return (
        <Container>
            <Heading>Todo List</Heading>
            <TodoContainer>
                <SubHeading>Things to be done</SubHeading>
                <List>
                    {renderItems()}
                </List>
            </TodoContainer>
            <NewItemForm>
                <LeftContent>
                    <PlusImage src={require("../assets/plus.svg").default} alt="Plus" />
                    <InputForm placeholder="Type new task..." value={NewItems} onChange={(e) => setNewItems(e.target.value)} />
                </LeftContent>
                <SubmitBtn onClick={(e) => UpdateItem(e)}>Add New</SubmitBtn>
            </NewItemForm>
            <CompletedContainer>
                <SubHeading>Completed</SubHeading>
                <List>
                    {renderCompleted()}
                </List>
            </CompletedContainer>
        </Container>
    )
}

export default ToDo;

const Container = styled.div`
    width: 60%;
    padding: 40px 150px;
    border-left: 2px solid #f5f5f5;
    border-right: 2px solid #f5f5f5;
    margin: 0 auto;
`;
const Heading = styled.h1`
    font-size: 48px;
    font-weight: bold;
    text-align: center;
`;
const TodoContainer = styled.div``;
const CompletedContainer = styled.div`
    color: #11c696;
`;
const SubHeading = styled.h3`
    font-size: 28px;
    color: #040241;
`;
const List = styled.ul``;
const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const LeftContent = styled.div`
    display: flex;
    align-items: center;
`;
const CheckBtn = styled.button`
    width: 20px;
    height: 20px;
    border: 2px solid #040241;
    border-radius: 50%;
    margin-right: 10px;
`;
const Content = styled.span`
    font-size: 18px;
`;
const GreenTick = styled.div`
    border: 2px solid #11c696;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    display: block;
`;
const TickImage = styled.img`
    width: 80%;
    display: block;
    margin-top: 2px;
    margin-left: 2px;
`;
const RightContent = styled.div`
    display: flex;
    align-items: centre;
`;
const DeleteBtn = styled.button`
    width: 16px;
    height: 16px;
    display: block;
`;
const BtnImage = styled.img`
    width: 100%;
    display: block;
`;
const BackBtn = styled.button`
    width: 16px;
    height: 16px;
    margin-right: 24px;
`;
const BackImage = styled.img`
    width: 100%;
    display: block
`;
const NewItemForm = styled.div`
    display: flex;
    align-items: centre;
    justify-content: space-between;
    margin-left: 40px;
    margin-top: 40px;
    border: 2px solid #f5f5f5;
    border-radius: 2px;
`;
const PlusImage = styled.img`
    width: 12px;
    margin: 0 10px;
`;
const InputForm = styled.input``;
const SubmitBtn = styled.button`
    font-size: 16px;
    color: #fff;
    background: #040241;
    padding: 12px 24px;
    border-radius: 2px;
`;