import { Outlet, Link } from "react-router-dom";
import ProfileFunction from "./Profile";
import ProfileClass from "./ProfileClass";
const AboutUs = () => {
  return (
    <div className="m-10 mx-32">
      {/* <h1 className="font-bold text-4xl">About us</h1> */}
      <div class="relative">
        <h1 class="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl ">
          About us
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl w-[700]">
          Hungry for a fresh take on food delivery? Welcome to YumByte, your
          one-stop shop for culinary adventures from the comfort of your couch
          (or office chair, or park bench - you get the idea). We're not just
          another food app; we're a team of passionate foodies on a mission to
          revolutionize the way you eat
        </p>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/fast-food-4119390-3425151.png"
          alt=""
          className="w-96"
        />
      </div>
      <br />

      <div className="flex items-center mt-20" >
        <h2 className="font-medium text-[80px] leading-[1.3]">
          Here's what makes YumByte different
        </h2>
        <ul class="">
          <li>
            <h2 className="text-xl font-semibold">Bite-Sized Brilliance:</h2> We curate the best restaurants and
            hidden gems in your city, hand-picking menus that burst with flavor
            and variety. No more scrolling through endless options – just
            deliciousness at your fingertips.
          </li>
          <br />
          <li>
            <h2 className="text-xl font-semibold">Tech to Tabletop:</h2> Our cutting-edge app makes ordering a
            breeze. Say goodbye to confusing menus and clunky interfaces. With
            YumByte, you're just a few taps away from your next food fix.
          </li>
          <br />
          <li>
            <h2 className="text-xl font-semibold">Delivery with a Smile:</h2> We partner with friendly and reliable
            delivery drivers who get your food to you fast and fresh. No hangry
            meltdowns on our watch!
          </li>
          <br />
          <li>
            <h2 className="text-xl font-semibold">Beyond the Bite:</h2> We're more than just an app; we're a
            community of food lovers. Discover hidden gems, share culinary tips,
            and join us on virtual foodie adventures – because good food is
            always better with friends.
          </li>
        </ul>
      </div>
      <br />


      <div className="flex justify-between items-center mt-32">
    
      
      <ul class="w-[600px] mr-32">
        <li>
          <h2 className="text-xl font-semibold">Supporting local businesses:</h2> We champion independent
          restaurants and chefs, bringing their culinary creations straight to
          your door.
        </li>
        <br />
        <li>
          <h2 className="text-xl font-semibold">Sustainable eats:</h2> We're committed to eco-friendly practices,
          working with partners who share our values for a delicious and
          responsible future.
        </li>
        <br />
        <li>
          <h2 className="text-xl font-semibold">Making food fun:</h2> We believe food should be an adventure, not a
          chore. YumByte is here to turn mealtimes into moments of joy and
          discovery. So, are you ready to bite into something new? Join the
          YumByte revolution and experience the joy of food, delivered.
        </li>
      </ul>
      <h2 className="font-medium text-[80px] leading-[1.3]">YumByte is all about</h2>
      </div>
    </div>
  );
};

export default AboutUs;
