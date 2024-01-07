import { Outlet, Link } from "react-router-dom";
import ProfileFunction from "./Profile";
import ProfileClass from "./ProfileClass";
const AboutUs = () => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-xl">About us</h1>
      <p>
        Hungry for a fresh take on food delivery? Welcome to YumByte, your
        one-stop shop for culinary adventures from the comfort of your couch (or
        office chair, or park bench - you get the idea). We're not just another
        food app; we're a team of passionate foodies on a mission to
        revolutionize the way you eat
      </p>
      <br />
      <h2 className="font-medium text-xl">
        Here's what makes YumByte different:
      </h2>
      <ul class="list-disc list-inside">
        <li>
          <b>Bite-Sized Brilliance:</b> We curate the best restaurants and hidden gems
          in your city, hand-picking menus that burst with flavor and variety.
          No more scrolling through endless options – just deliciousness at your
          fingertips.
        </li>
        <li>
          <b>Tech to Tabletop:</b>  Our cutting-edge app makes ordering a breeze. Say
          goodbye to confusing menus and clunky interfaces. With YumByte, you're
          just a few taps away from your next food fix.
        </li>
        <li>
          <b>Delivery with a Smile:</b>  We partner with friendly and reliable delivery
          drivers who get your food to you fast and fresh. No hangry meltdowns
          on our watch!
        </li>
        <li>
          <b>Beyond the Bite:</b>  We're more than just an app; we're a community of
          food lovers. Discover hidden gems, share culinary tips, and join us on
          virtual foodie adventures – because good food is always better with
          friends.
        </li>
      </ul>
      <br />
      <h2 className="font-medium text-xl">YumByte is about:</h2>
      <ul class="list-disc list-inside">
        <li>
          <b>Supporting local businesses:</b>  We champion independent restaurants and
          chefs, bringing their culinary creations straight to your door.{" "}
        </li>
        <li>
          <b>Sustainable eats:</b>  We're committed to eco-friendly practices, working
          with partners who share our values for a delicious and responsible
          future.
        </li>
        <li>
          <b>Making food fun:</b>  We believe food should be an adventure, not a chore.
          YumByte is here to turn mealtimes into moments of joy and discovery.
          So, are you ready to bite into something new? Join the YumByte
          revolution and experience the joy of food, delivered.
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
