import api from "./api";

const createReward = () => {
  return api.get("/api/v1/reward")
}

export default {
  createReward
}