const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const { response } = require("express");

//@route   GET api/profile/me
//@desc    Get current users profile
//@access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user:req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   POST api/profile/me
//@desc    Create or Update a user profile
//@access  Private

router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required").not().isEmpty(),
      check("skills", "Skills is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    // if (company) profileFields.company = company;
    // if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    // if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(",").map((skill) => skill.trim());
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //Create
      profile = new Profile(profileFields);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   GET api/profile
//@desc    Get all profiles
//@access  Public

router.get('/',async(req,res)=>{
    try{
        const profiles=await Profile.find().populate('user',['name','avatar'])
        res.json(profiles)

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

//@route   GET api/profile/user/:user_id
//@desc    Get profile by user id
//@access  Public

router.get('/user/:user_id',async(req,res)=>{
    try{
        const profile=await Profile.findOne({user:req.params.user_id}).populate('user',['name','avatar']);
        if(!profile)
            return res.status(400).json({msg:'Profile not Found'});
        
        res.json(profile);

    }catch(err){
        console.error(err.message);
        if(err.kind=='ObjectId'){
            return res.status(400).json({msg:'Profile not Found'});
        }
        res.status(500).send('Server Error')
    }
})

//@route   DELETE api/profile
//@desc    DELETE profile,user and posts
//@access  Private

router.delete('/',auth,async(req,res)=>{
    try{
        // remove users posts
        //Remove Profile
        await Profile.findOneAndRemove({user:req.user.id})
        //Remove User
        await User.findOneAndRemove({ _id:req.user.id})
        
        res.json({msg:'User deleted'});

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})


module.exports = router;
