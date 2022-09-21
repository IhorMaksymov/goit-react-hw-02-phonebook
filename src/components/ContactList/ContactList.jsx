import PropTypes from 'prop-types';

import { List, Item, Text, Btn } from "./ContactListStyled";

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) =>
                <Item key={id}>
                    <Text>{name}:</Text><Text>{number}</Text> 
                    <Btn onClick={() => onDelete(id)}>Delete</Btn>
                </Item>
            )}
        </List>
    );  
};

ContactList.propTypes = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    )
};