import Cards from "../../cards/cards/";
import Cards2 from "../../cards.2/cards.2/";
import Grid from "@mui/material/Grid";

import "./content-cads.css";

const ContentCards = () => {
  return (
    <div>
      <h2>Home</h2>
      <div className="content-home">
        <Grid direction="row" container sm={12}>
          <Grid direction="column" sm={8} container gap={2}  sx={{
              marginTop: 2,
            }}>
            <Cards
              title={"CAIMAN SEARCH AND TWILIGHT RIVER"}
              image="../../../public/image/saldoval-visita-1.jpg"
            />
            <Cards
              title={"CANOPY WALK BRIDGE"}
              image="../../../public/image/canopy-7.jpg"
            />
            <Cards
              title={"CHUNCHO CLAY LICK"}
              image="../../../public/image/guacamayos-visita-2.jpg"
            />
          </Grid>
          <Grid
            container
            sm={4}
            gap={2}
            direction="column"
            sx={{
              marginTop: 2,
            }}
          >
            <Cards2
              title={"Jungle hike"}
              image="../../../public/image/saldoval-visita-1.jpg"
            />
            <Cards2
              title={"Piranha fishing and parrots search"}
              image="../../../public/image/canopy-7.jpg"
            />
            <Cards2
              title={"OUTdoor sports"}
              image="../../../public/image/guacamayos-visita-2.jpg"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContentCards;
