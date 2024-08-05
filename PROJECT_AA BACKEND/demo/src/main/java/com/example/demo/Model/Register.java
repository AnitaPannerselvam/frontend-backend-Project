// package com.example.demo.Model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.ManyToOne;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.JoinColumn;
// import com.fasterxml.jackson.annotation.JsonBackReference;

// @Entity
// public class Register {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String name;
//     private String email;
//     private String password;
//     private String phoneno;

//     @ManyToOne(fetch = FetchType.LAZY)
//     @JsonBackReference
//     @JoinColumn(name = "admin_id")
//     private Admin admin;

//     public Register() {
//     }

//     public Register(Long id, String name, String email, String password, String phoneno, Admin admin) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.phoneno = phoneno;
//         this.admin = admin;
//     }

//     // Getters and Setters
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public String getPhoneno() {
//         return phoneno;
//     }

//     public void setPhoneno(String phoneno) {
//         this.phoneno = phoneno;
//     }

//     public Admin getAdmin() {
//         return admin;
//     }

//     public void setAdmin(Admin admin) {
//         this.admin = admin;
//     }
// }


package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    private String password;

    private String name;  // Add this field

    @ManyToOne(fetch = FetchType.LAZY)
        @JsonBackReference
        @JoinColumn(name = "admin_id")
        private Admin admin;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public Admin getAdmin() {
                return admin;
           }
        
            public void setAdmin(Admin admin) {
                this.admin = admin;
            }
}


