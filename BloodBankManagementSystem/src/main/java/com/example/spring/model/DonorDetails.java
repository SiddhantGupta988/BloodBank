package com.example.spring.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class DonorDetails {
		@Id
		String email;
		String donorName;
		String age;
		String mobileNo;
		String password;
		String address;
		String g;
		String grp;
		String b;
		public DonorDetails()
		{
			
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getDonorName() {
			return donorName;
		}
		public void setDonorName(String donorName) {
			this.donorName = donorName;
		}
		public String getAge() {
			return age;
		}
		public void setAge(String age) {
			this.age = age;
		}
		public String getMobileNo() {
			return mobileNo;
		}
		public void setMobileNo(String mobileNo) {
			this.mobileNo = mobileNo;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public String getG() {
			return g;
		}
		public void setG(String g) {
			this.g = g;
		}
		public String getGrp() {
			return grp;
		}
		public void setGrp(String grp) {
			this.grp = grp;
		}
		public String getB() {
			return b;
		}
		public void setB(String b) {
			this.b = b;
		}
		public DonorDetails(String email, String donorName, String age, String mobileNo, String password,
				String address, String g, String grp, String b) {
			super();
			this.email = email;
			this.donorName = donorName;
			this.age = age;
			this.mobileNo = mobileNo;
			this.password = password;
			this.address = address;
			this.g = g;
			this.grp = grp;
			this.b = b;
		}
		@Override
		public String toString() {
			return "DonorDetails [email=" + email + ", donorName=" + donorName + ", age=" + age + ", mobileNo="
					+ mobileNo + ", password=" + password + ", address=" + address + ", g=" + g + ", grp=" + grp
					+ ", b=" + b + "]";
		}
			
}
