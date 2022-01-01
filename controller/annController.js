const Announcement = require("../model/annSchemaModel");
const petLost = [
  {
    _id: "1",
    name: "Ace",
    type: "Dog",
    age: 4,
    gender: "male",
    petOwner: "The Batman",
    healthCondition: "Superior",
    image: "Classified",
  },
  {
    _id: "2",
    name: "Krypto",
    type: "Dog",
    age: 5,
    gender: "male",
    petOwner: "Superman",
    healthCondition: "Superior",
    image: "Classified",
  },
];

exports.getannouncedLost = (req, res, next) => {
  const allAnnouncedPets = new Announcement();
  Announcement.find().then((result) => {
    return res.status(200).json({
      msg: "Success",
      pets: result,
    });
  });
};
exports.getannouncedLostById = (req, res, next) => {
  const petId = req.params._id;
  Announcement.findById(petId).then((result) => {
    return res.status(200).json({
      msg: "Success",
      pet: result,
    });
  });
};

exports.postPetLost = (req, res, next) => {
  const petLostPost = new Announcement({
    name: req.body.name,
    age: req.body.age,
    type: req.body.type,
    gender: req.body.gender,
    petOwnerId: req.body.petOwnerId,
    healthCondition: req.body.healthCondition,
    image: req.body.image,
  });
  petLostPost
    .save()
    .then((result) => {
      return res.status(200).json({
        msg: "Success",
        petPosted: petLostPost,
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteAnnouncement = (req, res, next) => {
  const petId = req.params.index;
  Announcement.findByIdAndDelete(petId).then((result) => {
    return res.status(200).json({
      msg: "Success",
      pet: result,
    });
  });
}; 

