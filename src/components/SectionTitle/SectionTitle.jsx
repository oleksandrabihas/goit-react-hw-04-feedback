import { Section } from "./Section.styled";
import PropTypes from 'prop-types';

export default function SectionTitle ({ children }) {
    return <Section>{children}</Section>;
}

SectionTitle.propTypes = {
  children: PropTypes.array.isRequired
};
