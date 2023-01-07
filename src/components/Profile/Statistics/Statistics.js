import PropTypes from 'prop-types';
import {Tetle} from 'components/Profile/Statistics/Statistics.styled';

export const Statistics = ({title, children}) => {
return <div>
  {title && <Tetle>{title}</Tetle>} 
  {children}
  </div>
}

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}))
}

