import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const CopyRight = props => {
    return(
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
           {props.companyName}
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    )
}

export default CopyRight;

