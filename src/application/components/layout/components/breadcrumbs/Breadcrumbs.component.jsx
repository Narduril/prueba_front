import { useLocation } from 'react-router';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { appRoutes } from '../../../../configuration/routes/app-routes/appRoutes';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { WrapperContainer } from './Breadcrumbs.styled';

const NextBreadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(appRoutes);
  const { pathname } = useLocation();

  return (
    <WrapperContainer>
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {breadcrumbs.map(({ match, breadcrumb, index }) => {
          const isMatched = pathname === match.pathname;

          return !isMatched ? (
            <Link
              key={`${breadcrumb}-${index}`}
              underline="hover"
              color="inherit"
              href={match.pathname}
            >
              {breadcrumb}
            </Link>
          ) : (
            <Typography fontWeight={'bold'} key={`${breadcrumb}-${index}`}>
              {breadcrumb}
            </Typography>
          );
        })}
        ;
      </Breadcrumbs>
    </WrapperContainer>
  );
};

export default NextBreadcrumbs;
