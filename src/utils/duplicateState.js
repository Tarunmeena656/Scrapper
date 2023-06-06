const stateModel = require("../models/stateModel");


exports.RemoveDuplicateState = async (name, stateVariant, allNewsId) => {
    try {
      const states = await stateModel.find();
      const oldState = [];
      for (const state of states) {
        const { state_name } = state;
        oldState.push(state_name);
      }
      if (states.length != 0) {
        if (!oldState.includes(name)) {
          await stateModel.create({
            state_name: name,
            variant: stateVariant,
            newsId: allNewsId,
          });
        }
      } else {
        await LeaderModel.create({
          state_name: name,
          variant: stateVariant,
          newsId: allNewsId,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  