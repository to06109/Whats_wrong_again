package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class DebatePosts {

    @Id @GeneratedValue
    @Column(name = "debate_post_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "debate_id")
    @NotNull
    private Debate debate;

    @NotNull
    private Long editor_id;

    @NotNull
    private LocalDateTime edit_date;

    private String contents;

    @NotNull
    private Long reply_to_id;

    private Long report_no;

    @OneToMany
    @JoinColumn(name = "debate_post")
    private List<Report> reports = new ArrayList<>();

}
