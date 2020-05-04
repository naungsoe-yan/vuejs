import { shallowMount } from "@vue/test-utils";
import Dashboard from "modules/dashboard/components/Dashboard.vue";

function shallowMountDashboard(props) {
  return shallowMount(Dashboard, { props });
}

describe("Dashboard", () => {
  it("layout property value is set to default if it is not passed", () => {
    const wrapper = shallowMountDashboard();
    expect(wrapper.props("layout")).toBe("default");
  });

  it("announcement and assignment lists are rendered after fetching settings", () => {
    const wrapper = shallowMountDashboard();
    expect(wrapper.find("announcement-list-stub").exists()).toBeTruthy();
    expect(wrapper.find("assignment-list-stub").exists()).toBeTruthy();
  });
});
