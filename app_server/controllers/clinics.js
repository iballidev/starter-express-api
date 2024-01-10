/* GET 'home' page */

// (req, res, next) => {
//     res.render("home", {
//       page_title: "Homepage"
//     });
// //   res.send("Yo!");
// }

const homelist = (req, res) => {
  //  res.send("Yo!");
  //   res.status(200).json({
  //     message: "Hi"
  //   });
  res.render("clinics-list", {
    title: "Loc8r - find a place to work with wifi"
  });
};
/* GET 'Location info' page */
const clinicInfo = (req, res) => {
  res.render("clinic-info", {
    // title: "Location info",
    title: "Starcups",
    pageHeader: {
      title: "Loc8r"
    },
    sidebar: {
      context:
        "is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
      callToAction:
        "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
    },
    location: {
      name: "Starcups",
      address: "125 High Street, Reading, RG6 1PS",
      rating: 3,
      facilities: ["Hot drinks", "Food", "Premium wifi"],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday - Friday",
          opening: "7:00am",
          closing: "7:00pm",
          closed: false
        },
        {
          days: "Saturday",
          opening: "8:00am",
          closing: "5:00pm",
          closed: false
        },
        {
          days: "Sunday",
          closed: true
        }
      ],
      reviews: [
        {
          author: "Simon Holmes",
          rating: 5,
          timestamp: "16 July 2013",
          reviewText:
            "What a great place. I can't say enough good things about it."
        },
        {
          author: "Charlie Chaplin",
          rating: 3,
          timestamp: "16 June 2013",
          reviewText: "It was okay. Coffee wasn't great, but the wifi was fast."
        }
      ]
    }
  });
};
/* GET 'Add review' page */
//   const addReview = (req, res) => {
//     res.render("location-review-form", { title: "Add review" });
//   };

module.exports = {
  homelist,
  clinicInfo
  // addReview
};
