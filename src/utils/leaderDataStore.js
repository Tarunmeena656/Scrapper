const LeaderModel = require("../models/leader");
const stateModel = require("../models/state");
// const authorModel = require("../models/author");

exports.leaderStoreInDatabase = async (name, Variant) => {
  try {
    const leaderArray = [];
    const leaders = await LeaderModel.find();
    if (leaders.length != 0) {
      leaders.filter((leader) => {
        const { leader_name } = leader;
        leaderArray.push(leader_name);
      });
      if (!leaderArray.includes(name)) {
        LeaderModel.create({
          leader_name: name,
          variant: Variant,
        });
      }
    } else {
      await LeaderModel.create({
        leader_name: name,
        variant: Variant,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.stateStoreInDatabase = async (state, Variant) => {
  try {
    const stateArray = [];
    const states = await stateModel.find();
    if (states.length != 0) {
      states.filter((state) => {
        const { state_name } = state;
        stateArray.push(state_name);
      });
      if (!stateArray.includes(state)) {
        stateModel.create({
          state_name: state,
          variant: Variant,
        });
      }
    } else {
      await stateModel.create({
        state_name: state,
        variant: Variant,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// exports.authorStoreIntoData = async (Author) => {
//   try {
//     console.log(Author);
//     const authorArray = [];
//     const authors = await authorModel.find();
//     if (authors.length != 0) {
//       authors.filter((author) => {
//         const { author_name } = author;
//         authorArray.push(author_name);
//       });
//       if(!authorArray.includes(Author)) {
//         authorModel.create({
//           author_name: Author,
//         });
//       }
//     } else {
//       await authorModel.create({
//         author_name: Author,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
