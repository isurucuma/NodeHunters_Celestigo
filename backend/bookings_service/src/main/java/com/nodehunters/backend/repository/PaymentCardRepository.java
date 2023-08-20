package com.nodehunters.backend.repository;

import com.nodehunters.backend.entity.PaymentCard;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

@Transactional
public interface PaymentCardRepository extends JpaRepository<PaymentCard, Long> {
}
