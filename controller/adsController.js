const Advertisement = require("../model/adsSchemaModel");

exports.getadvertiseAdoption = (req, res, next) => {
  const allAdvertisedPets = new Advertisement();
  Advertisement.find().then((result) => {
    return res.status(200).json({
      msg: "Success",
      pets: result,
    });
  });
};
exports.getadvertiseAdoptionById = (req, res, next) => {
  const petId = req.params._id;
  Advertisement.findById(petId).then((result) => {
    return res.status(200).json({
      msg: "Success",
      pet: result,
    });
  });
};

exports.postadvertiseAdoption = (req, res, next) => {
  const petAdvertise = new Advertisement({
    name: req.body.name,
    age: req.body.age,
    type: req.body.type,
    gender: req.body.gender,
    petOwnerId: req.body.petOwnerId,
    healthCondition: req.body.healthCondition,
    image: req.body.image,
    price: req.body.price,
  });
  petAdvertise
    .save()
    .then((result) => {
      return res.status(200).json({
        msg: "Success",
        petPosted: petAdvertise,
      });
    })
    .catch((err) => console.log(err));
};
exports.postAdvertiseDemandPet = (req, res, next) => {
  const demandPet = {
    _id: req.body._id,
    name: req.body.name,
    age: req.body.age,
    type: req.body.type,
    gender: req.body.gender,
    petOwner: req.body.petOwner,
    healthCondition: req.body.healthCondition,
    image: req.body.image,
    price: req.body.price,
  };
  petAdvertise.push(demandPet);
  console.log(petAdvertise);
  return res.status(200).json({
    msg: "Success",
    pet: demandPet,
  });
};
exports.deleteAddAdoption = (req, res, next) => {
  const petId = req.params.index;
  Advertisement.findByIdAndDelete(petId).then((result) => {
    return res.status(200).json({
      msg: "Success",
      pet: result,
    });
  });
};

