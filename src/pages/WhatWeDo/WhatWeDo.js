import React from "react";
import "./WhatWeDo.scss";
import { Container } from "react-bootstrap";

const WhatWeDo = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        style={{ width: "100%" }}
        className="d-flex gap-3 flex-wrap justify-content-between mt-5"
      >
        <div className="what-we-do d-flex align-items-center justify-content-center flex-column">
          <span className="all-things-dairy-title">What We Do</span>
          <span className="all-things-dairy-desc">
            Innovation, cooperation and serving our communities are the things
            that have kept our story alive since 2014. And there's no end in
            sight.
          </span>
          <div className="overlay"></div>
        </div>
        <Container className="d-flex align-items-center justify-content-center mb-5">
          <div
            style={{ rowGap: 40, columnGap: 20 }}
            className="d-flex flex-wrap justify-content-between"
          >
            <div
              className="mt-5"
              style={{
                fontSize: 20,
                fontWeight: 400,
                lineHeight: "35px",
                color: " grey",
                // width: "70%",
                textAlign: "center",
                // height: "84vh",
              }}
            >
              The Gajeku and Madhvi family never let failures stop them. With
              strong willpower to strive hard, derived from trust in God,
              followed by social support, they achieved great significance and
              reached the peak. Their vision is futuristic of a green and
              organic nation, where there is a big NO to artificial things and
              only traditional (ecological) and natural methods utilized.
              Accordingly, one should move ahead of all odds and never look
              back. Learn from the failures but never sit back and regret.
              <br />
              The person behind Madhvi, Mr Manubhai Kuniya, is a staunch
              believer of living in the present. He has no fear for tomorrow for
              the reason that he has risen out of all odds and became successful
              and thus considers his failures to be his teachers. A simple man
              himself, Manubhai has seen all the extremes of life at a very
              early age and this has made him more and more strong en route.
              With Madhvi being the focus of his life, he devotes himself to
              nature and stays away from artificial resources or luxuries of
              life. Being a great personality, he likes meeting good people. He
              is very much fond of reading and follows his own ideals evolved
              from the thought, awareness about love of God which creates
              gratitude towards lord and expressed through love towards God by
              taking care and serving his creation (plant kingdom, animal
              kingdom, human kingdom etc.) through reverence. According to him,
              with the hard work and efforts of his team, today we can witness
              the success of Gajeku and Madhvi. He is strictly against blind
              beliefs but follows the doctrine of God's love for humanity and
              gratitude towards God.
              <br />
              He has great expectations from Sajeev because Sajeev is the right
              path towards a healthy and safe tomorrow is what he belleves. With
              great potential, he has that power to take along the community and
              reach new heights with the words Sajeev and organic. Such is the
              man, making him a big hero with all his achievements.
              <br />
              In the present era of globalization, life has become so fast and
              same applies for agriculture. Various new methods and technologies
              have come forth in the field of agriculture and cattle farming.
              With an extremely new but traditional perspective, Gajeku farm
              started its journey with just a few Indian cows (Bos indicus) or
              Deshi Gaay, now plenty and of the best breed. Gajeku farm cows
              produce whole milk with an IDEAL fat content of 3.7-4.2 which is
              naturally maintained, resulting in nutritious & digestive high
              quality milk. With this whole milk, Madhvi Dairy satisfies the
              mass with Gau-Ghrut/Ghee that are made out of best healthy milk
              and are prepared avoiding artificial ingredients or preservatives.
              Jersey/H.F. cows (Bos Taurus) were never introduced in our farm.
              Moreover, Gajeku Farm idealistically developed agriculture using
              natural fertilizers and systems of irrigation to maintain soil
              moisture, avoiding the use of insecticides and pesticides, thus
              bestowing the people with best quality vegetables, wheat and
              various other grains. Mrs. Galbiben Jethabhai Kuniya, the name
              behind Gajeku Farm, has received various awards locally and
              nationally. With the notion Sajeev, Gajeku Farm has, with immense
              efforts and strong determination, managed to sustain a biological
              cycle. With the use of biodegradable waste, cow dung fermented
              preparations as natural fertilizers, degraded tree leaves and
              other natural resources, agriculture is undertaken. The livestock
              consumes this natural food and thus produces whole milk which is
              nutritious and digestive. This in turn is used to prepare quality
              milk dairy items through Madhvi. Such a futuristic perspective of
              protecting and maintaining the ecosystem is a truly novel
              initiative.
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WhatWeDo;
