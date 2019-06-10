const remoteURL = "http://localhost:5002"

export default {
getItem(id) {
    return fetch(`${remoteURL}/activities/${id}`).then(e => e.json())
  },
  getAllItems() {
    return fetch(`${remoteURL}/activities`).then(e => e.json())
  },
  postNewItem(newActivity) {
    return fetch(`${remoteURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newActivity)
    }).then(e => e.json())
  },
  putItem(editedActivity) {
    return fetch(`${remoteURL}/activities/${editedActivity.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedActivity)
    }).then(e => e.json());
  },
  deleteItem(id) {
    return fetch(`${remoteURL}/activities/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  },



  getGoal(id) {
    return fetch(`${remoteURL}/goals/${id}`).then(e => e.json())
  },
  getAllGoals() {
    return fetch(`${remoteURL}/goals`).then(e => e.json())
  },
  postNewGoal(newGoal) {
    return fetch(`${remoteURL}/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGoal)
    }).then(e => e.json())
  },
  putGoal(editedGoal) {
    return fetch(`${remoteURL}/goals/${editedGoal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedGoal)
    }).then(e => e.json());
  },
  deleteGoal(id) {
    return fetch(`${remoteURL}/goals/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  },
}