package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class Attached {

    @Id @GeneratedValue
    @Column(name = "attached_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "attached_group_id")
    @NotNull
    private AttachedGroup attached_group;

    @NotNull
    private String ori_name;

    @NotNull
    private String server_name;

    @NotNull
    private LocalDateTime edit_date;

    @NotNull
    private String extension;

}
