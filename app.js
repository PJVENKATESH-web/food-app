import React from "react"
import ReactDOM from "react-dom/client";
/*
Header -Logo,NavItems
Body -Search,
    -RestaurantContainer
        -RestaurantCard
            -IMG
            -
Footer -Copyright,Links,Address,Contact
*/

const Header =()=>{
    return (
        <div className="header">
            <div className ="logo-container">
            <img className="logo" src="https://www.google.com/imgres?q=logo&imgurl=https%3A%2F%2Fmarketplace.canva.com%2FEAFaFUz4aKo%2F2%2F0%2F1600w%2Fcanva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg&imgrefurl=https%3A%2F%2Fwww.canva.com%2Ftemplates%2Fs%2Ffood-logo%2F&docid=UFP4zOfACVBHDM&tbnid=aWSbgBh0uZFSAM&vet=12ahUKEwjVoeySg6KKAxWx4jgGHegrET0QM3oECBsQAA..i&w=1600&h=1600&hcb=2&ved=2ahUKEwjVoeySg6KKAxWx4jgGHegrET0QM3oECBsQAA\projects\food-app\media\logo.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    );
};

const resList=[{
    "info": {
      "id": "680861",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e69ef8a2-627d-4312-b6c4-a4598e84649f_680861.JPG",
      "locality": "Secunderabad",
      "areaName": "Sainikpuri",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "3.1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-15 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/kfc-secunderabad-sainikpuri-rest680861",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "3895",
      "name": "5th Avenue Bakers",
      "cloudinaryImageId": "vowzdlrlhboxkpsrluhe",
      "locality": "Sainikpuri",
      "areaName": "Sainikpuri",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "American",
        "Fast Food",
        "Snacks",
        "Desserts",
        "Bakery",
        "Italian"
      ],
      "avgRating": 4.4,
      "parentId": "6534",
      "avgRatingString": "4.4",
      "totalRatingsString": "109K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-14 23:58:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹39"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "5.4K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/5th-avenue-bakers-sainikpuri-rest3895",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "326208",
      "name": "Millet Express",
      "cloudinaryImageId": "75f8103a06f57c043f26343fa42e23e2",
      "locality": "A.S. Rao Nagar & Sainikpuri",
      "areaName": "A. S. Rao Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Healthy Food",
        " South Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "10639",
      "avgRatingString": "4.4",
      "totalRatingsString": "12K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-15 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹49"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/millet-express-and-sainikpuri-a-s-rao-nagar-rest326208",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "83859",
      "name": "Euphoria",
      "cloudinaryImageId": "whqnzmmeui7z2qfwshju",
      "locality": "Sainikpuri",
      "areaName": "Sainikpuri",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.7,
      "parentId": "8132",
      "avgRatingString": "4.7",
      "totalRatingsString": "4.3K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-14 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.9",
          "ratingCount": "16"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/euphoria-sainikpuri-rest83859",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "400330",
      "name": "Cupcake Bliss Cake & Desserts",
      "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
      "locality": "Kapra Circle",
      "areaName": "Sainikpuri ",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Ice Cream",
        "Beverages",
        "Cakes"
      ],
      "avgRating": 4,
      "parentId": "66732",
      "avgRatingString": "4.0",
      "totalRatingsString": "268",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-15 01:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/cupcake-bliss-cake-and-desserts-kapra-circle-sainikpuri-rest400330",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "617746",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_617746.JPG",
      "locality": "AMR Planet Mall",
      "areaName": "Tarnaka, Nacharam & Malkajigiri",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "8.6K+",
      "sla": {
        "deliveryTime": 58,
        "lastMileTravel": 7.3,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "7.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-15 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/burger-king-amr-planet-mall-tarnaka-nacharam-and-malkajigiri-rest617746",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "3880",
      "name": "KS Bakers",
      "cloudinaryImageId": "6127cb288329ad1c9e988276914d48ad",
      "locality": "A S Rao Nagar",
      "areaName": "Yapral Kowkoor",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Pizzas",
        "Desserts",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.4,
      "parentId": "574",
      "avgRatingString": "4.4",
      "totalRatingsString": "61K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-14 23:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/ks-bakers-a-s-rao-nagar-yapral-kowkoor-rest3880",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "26099",
      "name": "Baskin Robbins - Ice Cream Desserts",
      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
      "locality": "DEFENCE COLONY",
      "areaName": "Sainikpuri",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "5588",
      "avgRatingString": "4.6",
      "totalRatingsString": "3.8K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-15 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/baskin-robbins-ice-cream-desserts-defence-colony-sainikpuri-rest26099",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "8787",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4d98ef74-bce5-4442-9a99-6bc74d9458bd_8787.JPG",
      "locality": "Sainikpuri Rd",
      "areaName": "Sainikpuri",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
      ],
      "avgRating": 4.2,
      "parentId": "2",
      "avgRatingString": "4.2",
      "totalRatingsString": "28K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-15 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/subway-rd-sainikpuri-rest8787",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "720358",
      "name": "Wendy's Burgers",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/87839f29-edee-44c3-b81a-8b761aa7e003_720358.jpg",
      "locality": "Plot No 17 Officers Colony",
      "areaName": "A. S. Rao Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Burgers",
        "American",
        "Fast Food",
        "Snacks"
      ],
      "avgRating": 4.1,
      "parentId": "972",
      "avgRatingString": "4.1",
      "totalRatingsString": "2.3K+",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 5.8,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "5.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-12-14 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-d75f13cb-3f39-4943-9757-b7e61deacb58"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/wendys-burgers-plot-no-17-officers-colony-a-s-rao-nagar-rest720358",
      "type": "WEBLINK"
    }
  }]


const RestaurantCard =(props)=>{
    const {resData}=props
    const {
        name,
        cuisines,
        avgRating,
        costForTwo
        // slaString
    } = resData?.info

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src=
            {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`} alt="res-logo"/>
            <h3>{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>  
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{resData?.info?.sla?.slaString}</h4> */}
        </div>
    )
}
const Body=()=>{
    return (
      <div className="body">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="enter the dish or restaurant name"
          ></input>
          <button id="search">Search</button>
        </div>
        <div className="res-container">
            {resList.map((restaurant)=>{
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            })}
      
        </div>
      </div>
    );
}
//not using keys(not acceptable)<<<<<<using index <<<<unique id(best practice)


const AppLayoutComponent =()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />)
