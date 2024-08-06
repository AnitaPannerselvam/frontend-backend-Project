package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Register;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long> {
    Register findByEmail(String email);
}
