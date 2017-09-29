module.exports = {
  add(req,res,next){
    const db = req.app.get('db');
    const {
      name,
      description,
      address,
      city,
      imagurl,
      loan,
      monthlymorgage,
      desiredrent
    } = req.params; //
    db.addHouse([
      name,
      description,
      address,
      city,
      imagurl,
      loan,
      monthlymorgage,
      desiredrent
    ])
      .then(()=>res.status(200).send())
      .catch(()=>res.status(500).send("SERVER ERROR"));
  },
  get(req,res,next){
    const db = req.app.get('db');
    const {desiredrent} = req.query; //
    if(isNaN(desiredrent)){ // desiredrent should always be a number anyway but this is a catch just in case.
      db.getHouses([0])
        .then(houses=>res.status(200).send(houses))
        .catch(()=>res.status(500).send("SERVER ERROR"));
    } else {
      db.getHouses([desiredrent])
        .then(houses=>res.status(200).send(houses))
        .catch(()=>res.status(500).send("SERVER ERROR"));
    }
  },
  delete(req,res,next){
    const db = req.app.get('db');
    const {id} = req.params;
    db.deleteHouse([id])
      .then(()=>res.status(200).send())
      .catch(()=>res.status(500).send("SERVER ERROR"));
  }
};
