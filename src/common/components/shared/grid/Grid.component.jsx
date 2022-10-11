import Grid from '@mui/material/Grid';
import Card from '../../core/card';

const GridContainer = (list) => {
  return (
    <Grid container spacing={5}>
      {list.list.map((item, index) => {
        return (
          <Grid key={`${item.id}-${index}`} item xs={12} sm={6} md={4} lg={3}>
            <Card
              productId={item.id}
              image={item.imgUrl}
              brand={item.brand}
              model={item.model}
              price={item.price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GridContainer;
